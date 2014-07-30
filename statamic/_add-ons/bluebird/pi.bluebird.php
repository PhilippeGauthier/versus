<?php

class Plugin_bluebird extends Plugin {

	var $meta = array(
		'name'      	=> 'Blue Bird',
		'version'    	=> '1.2',
		'author'     	=> 'Nick Snyder',
		'author_url' 	=> 'http://fasterhorses.co',
		'contributor'   => 'MikeNGarrett',
		'contributor_url'  => 'http://redgarrett.com'
	);

	public function index() {

		$bbConfig = array();
		$bbConfig['access_token'] = $this->fetch('access_token', null, null, false, false);
		$bbConfig['access_token_secret'] = $this->fetch('access_token_secret', null, null, false, false);
		$bbConfig['consumer_key'] = $this->fetch('consumer_key', null, null, false, false);
		$bbConfig['consumer_secret'] = $this->fetch('consumer_secret', null, null, false, false);
		
		$count  = $this->fetchParam('count', 5, 'is_numeric');
		$screen_name = $this->fetchParam('screen_name', null);
		$include_rts  = $this->fetchParam('include_rts', true);
		$include_entities  = $this->fetchParam('include_entities', true);
		$exclude_replies  = $this->fetchParam('exclude_replies', false);

		$cache_length = $this->fetchParam('cache', 60); // Cache time in seconds

		// Check the cache before continuing. We don't want to hit the API on every request.
		$cached_tweets = $this->cache->getYAML($screen_name);
		if ($cached_tweets) {
			// If there's a cache and it's older than our specified time, delete it. It'll be recreated later.
			if ($this->cache->getAge($screen_name) >= $cache_length) {
				$this->cache->delete($screen_name);
			}
			// There's a cache and its still new enough? Use that.
			else {
				return $cached_tweets;
			}
		}

		function buildBaseString($baseURI, $method, $params) {
			$r = array();
			ksort($params);
			foreach ($params as $key=>$value) {
				$r[] = "$key=" . rawurlencode($value);
			}
			return $method."&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r)); //return complete base string
		}

		function buildAuthorizationHeader($oauth) {
			$r = 'Authorization: OAuth ';
			$values = array();
			foreach ($oauth as $key=>$value)
				$values[] = "$key=\"" . rawurlencode($value) . "\"";
			$r .= implode(', ', $values);
			return $r;
		}

		$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
		
		if ($exclude_replies == true) {
			$query = array(
				'count' => $count,
				'screen_name' => $screen_name,
				'include_rts' => $include_rts,
				'exclude_replies' => $exclude_replies,
				'include_entities' => $include_entities
			);
		} else {
			$query = array(
				'count' => $count,
				'screen_name' => $screen_name,
				'include_rts' => $include_rts,
				'include_entities' => $include_entities
			);
		}
		
		$oauth_access_token = $bbConfig['access_token'];
		$oauth_access_token_secret = $bbConfig['access_token_secret'];
		$consumer_key = $bbConfig['consumer_key'];
		$consumer_secret = $bbConfig['consumer_secret'];

		$oauth = array(
			'oauth_consumer_key' => $consumer_key,
			'oauth_nonce' => time(),
			'oauth_signature_method' => 'HMAC-SHA1',
			'oauth_token' => $oauth_access_token,
			'oauth_timestamp' => time(),
			'oauth_version' => '1.0'
		);

		$base_params = empty($query) ? $oauth : array_merge($query, $oauth);
		$base_info = buildBaseString($url, 'GET', $base_params);
		$url = empty($query) ? $url : $url . "?" . http_build_query($query);

		$composite_key = rawurlencode($consumer_secret) . '&' . rawurlencode($oauth_access_token_secret);
		$oauth_signature = base64_encode(hash_hmac('sha1', $base_info, $composite_key, true));
		$oauth['oauth_signature'] = $oauth_signature;

		$header = array(buildAuthorizationHeader($oauth), 'Expect:');

		$options = array(
			CURLOPT_HTTPHEADER => $header,
			CURLOPT_HEADER => false,
			CURLOPT_URL => $url,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_SSL_VERIFYPEER => false
		);

		$feed = curl_init();
		curl_setopt_array($feed, $options);
		$json = curl_exec($feed);
		curl_close($feed);

		$twitter_data = json_decode($json);

		if (isset($twitter_data)) {

			$tweets = theNest($twitter_data);

			$output = array(
				"tweets" => array(),
				"user" => array()
			);

			foreach ($tweets as $tweet) {

				$tweetText = $tweet['text'];

				if (isset($tweet['entities'])) {
					if (is_array($tweet['entities']['urls'])) { $entityUrl = $tweet['entities']['urls']; }
					if (is_array($tweet['entities']['hashtags'])) { $entityHash = $tweet['entities']['hashtags']; }
					if (is_array($tweet['entities']['user_mentions'])) { $entityUser = $tweet['entities']['user_mentions']; }
				}

				if (!empty($entityUrl) || !empty($entityHash) || !empty($entityUser)) {

					foreach ($entityUrl as $url) {
						$find = $url['url'];
						$replace = '<a href="'.$find.'">'.$url['display_url'].'</a>';
						$tweetText = str_replace($find, $replace, $tweetText);
					}

					foreach ($entityHash as $hashtag) {
						$find = '#'.$hashtag['text'];
						$replace = '<a href="https://twitter.com/#!/search/%23'.$hashtag['text'].'">'.$find.'</a>';
						$tweetText = str_replace($find, $replace, $tweetText);
					}

					foreach ($entityUser as $user_mention) {
						$find = "@".$user_mention['screen_name'];
						$replace = '<a href="https://twitter.com/'.$user_mention['screen_name'].'">'.$find.'</a>';
						$tweetText = str_replace($find, $replace, $tweetText);
					}

				}

				if (!empty($tweet['entities']['media'])) {
					foreach ($tweet['entities']['media'] as $media) {
						$find = $media['url'];
						$replace = '<a href="'.$media['url'].'">'.$media['display_url'].'</a>';
						$tweetText = str_replace($find, $replace, $tweetText);
					}
				}

				$tweet['text'] = $tweetText;
				$tweet['tweet_url'] = "https://twitter.com/" . $tweet['user']['screen_name'] . "/status/" . $tweet['id'];

				array_push($output["tweets"], $tweet);
				array_push($output["user"], $tweet['user']);

			}


			for ($i = 1; $i <= $count; $i++) {
				unset($output["user"][$i]);
			}

			// Place tweets for user into their own cache file
			$this->cache->putYAML($screen_name, $output);

			return $output;

		}
		return false;


	}
}

function birdTurd($turd) {
	echo "<pre>";
	echo var_dump($turd);
	echo "</pre>";
}

function theNest($d) {
	if (is_object($d)) {
		$d = get_object_vars($d);
	}
	if (is_array($d)) {
		return array_map(__FUNCTION__, $d);
	} else {
		return $d;
	}
}