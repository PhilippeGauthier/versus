<?php

class Plugin_dots extends Plugin {

	var $meta = array(
		'name'       => 'Dots',
		'version'    => '1.1',
		'author'     => 'Nick Snyder',
		'author_url' => 'http://fasterhorses.co'
	);

	public function index() {
		$api_key = $this->fetchParam('api_key', null);
		$user_id = $this->fetchParam('user_id', null);
		$limit  = $this->fetchParam('limit', 50, 'is_numeric');
		$count  = $this->fetchParam('count', 10, 'is_numeric');
		$orientation  = $this->fetchParam('orientation', 'both');
		$random  = $this->fetchParam('random', false);
		
		$user_id = strtoupper($user_id);
		
		$photoParams = "people.getPublicPhotos&api_key=$api_key&user_id=$user_id&page=1&per_page=$limit&format=json&nojsoncallback=1";	
		$userParams = "people.getInfo&api_key=$api_key&user_id=$user_id&format=json&nojsoncallback=1";
		
		$outputTemp = array();
		$output = array(
			"photos" => array(),
			"user" => array()
		);
				
		if ($photoResponse = $this->flickr_curl($photoParams)) {
			
			$return = smangIt($photoResponse);
			$pics = $return['photos']['photo'];
		
			foreach ($pics as $pic) {
				$outputTemp[] = ermahgerdMatch($pic, $user_id);      			
			}
			
			
			if ($random === "true") {

				$randomNumberArr = array();
				
				for ($i = 0; $i < $count; $i++) {

					$randomNumber = rand(0, $limit-1);

					if(!empty($randomNumberArr) && in_array($randomNumber,$randomNumberArr)) {
						$randomNumber = randWithout(0, $limit-1,$randomNumberArr);
					}
					$output['photos'][$i] = $outputTemp[$randomNumber];
					array_push($randomNumberArr,$randomNumber);
				}
				
			} else {
				
				for ($i = 0; $i < $count; $i++) {	
					$output['photos'][$i] = $outputTemp[$i];
				}	
				
			}

		}
		
		if ($userResponse = $this->flickr_curl($userParams)) {
			$userReturn = smangIt($userResponse);
			$person = $userReturn['person'];
			$user = array(
				"real_name" => $person['realname']['_content'],
				"user_name" => $person['username']['_content'],
				"location" => $person['location']['_content'],
				"description" => $person['description']['_content'],
				"profile_url" => $person['profileurl']['_content'],
				"join_date" => $person['photos']['firstdatetaken']['_content'],
				"total_photos" => $person['photos']['count']['_content']
			);     	
			array_push($output["user"], $user);
		}
		
		if (empty($output['photos']) || empty($output['user'])) {
			return "Sorry! Flickr appears to be down at the moment. Try again later.";
		} else {
			return $output;
		}
	}
	
	function flickr_curl($params) {        
		$request = curl_init('http://api.flickr.com/services/rest/?method=flickr.'.$params);
		curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
		$contents = curl_exec($request);
		if ($contents) {
			return json_decode($contents);
		}
	}
}

function ermahgerdMatch($pic, $id) {			
	$base = "http://farm{$pic['farm']}.staticflickr.com/{$pic['server']}/{$pic['id']}_{$pic['secret']}";
	$photo_sizes = array(
		'title' => $pic['title'],
		'url' => "http://www.flickr.com/photos/$id/{$pic['id']}/",
		'square' => $base . "_s.jpg",
		'large_square' => $base . "_q.jpg",
		'thumbnail' => $base . "_t.jpg",
		'small' => $base . "_m.jpg",
		'small_320' => $base . "_n.jpg",
		'medium' => $base . ".jpg",
		'medium_640' => $base . "_z.jpg?zz=1",
		'medium_800' => $base . "_c.jpg",
		'large' => $base . "_b.jpg",
		'original' => $base . "_o.jpg"
	);	
	return $photo_sizes;
}

function smangIt($d) {
	if (is_object($d)) {
		$d = get_object_vars($d);
	}
	if (is_array($d)) {
		return array_map(__FUNCTION__, $d);
	} else {
		return $d;
	}
}

function randWithout($from, $to, array $exceptions) {
    sort($exceptions); // lets us use break; in the foreach reliably
    $number = rand($from, $to - count($exceptions)); // or mt_rand()
    foreach ($exceptions as $exception) {
        if ($number >= $exception) {
            $number++; // make up for the gap
        } else /*if ($number < $exception)*/ {
            break;
        }
    }
    return $number;
}
