/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 0
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(jQuery);


/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

;( function( $, window, document, undefined )
{
	'use strict';

	var cssTransitionSupport = function()
		{
			var s = document.body || document.documentElement, s = s.style;
			if( s.WebkitTransition == '' ) return '-webkit-';
			if( s.MozTransition == '' ) return '-moz-';
			if( s.OTransition == '' ) return '-o-';
			if( s.transition == '' ) return '';
			return false;
		},

		isCssTransitionSupport = cssTransitionSupport() === false ? false : true,

		cssTransitionTranslateX = function( element, positionX, speed )
		{
			var options = {}, prefix = cssTransitionSupport();
			options[ prefix + 'transform' ]	 = 'translateX(' + positionX + ')';
			options[ prefix + 'transition' ] = prefix + 'transform ' + speed + 's linear';
			element.css( options );
		},

		hasTouch	= ( 'ontouchstart' in window ),
		hasPointers = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		wasTouched	= function( event )
		{
			if( hasTouch )
				return true;

			if( !hasPointers || typeof event === 'undefined' || typeof event.pointerType === 'undefined' )
				return false;

			if( typeof event.MSPOINTER_TYPE_MOUSE !== 'undefined' )
			{
				if( event.MSPOINTER_TYPE_MOUSE != event.pointerType )
					return true;
			}
			else
				if( event.pointerType != 'mouse' )
					return true;

			return false;
		};

	$.fn.imageLightbox = function( options )
	{
		var options	   = $.extend(
						 {
						 	selector:		'id="imagelightbox"',
						 	allowedTypes:	'png|jpg|jpeg|gif',
						 	animationSpeed:	250,
						 	preloadNext:	true,
						 	enableKeyboard:	true,
						 	quitOnEnd:		false,
						 	quitOnImgClick: false,
						 	quitOnDocClick: true,
						 	onStart:		false,
						 	onEnd:			false,
						 	onLoadStart:	false,
						 	onLoadEnd:		false
						 },
						 options ),

			targets		= $([]),
			target		= $(),
			image		= $(),
			imageWidth	= 0,
			imageHeight = 0,
			swipeDiff	= 0,
			inProgress	= false,

			isTargetValid = function( element )
			{
				return $( element ).prop( 'tagName' ).toLowerCase() == 'a' && ( new RegExp( '\.(' + options.allowedTypes + ')$', 'i' ) ).test( $( element ).attr( 'href' ) );
			},

			setImage = function()
			{
				if( !image.length ) return true;

				var screenWidth	 = $( window ).width() * 1.0,
					screenHeight = $( window ).height() * 1.0,
					tmpImage 	 = new Image();

				tmpImage.src	= image.attr( 'src' );
				tmpImage.onload = function()
				{
					imageWidth	 = tmpImage.width;
					imageHeight	 = tmpImage.height;

					// if( imageWidth > screenWidth || imageHeight > screenHeight )
					// {
					// 	var ratio	 = imageWidth / imageHeight > screenWidth / screenHeight ? imageWidth / screenWidth : imageHeight / screenHeight;
					// 	imageWidth	/= ratio;
					// 	imageHeight	/= ratio;
					// }

					// image.css(
					// {
					// 	'width':  imageWidth + 'px',
					// 	'height': imageHeight + 'px',
					// 	'top':    ( $( window ).height() - imageHeight ) / 2 + 'px',
					// 	'left':   ( $( window ).width() - imageWidth ) / 2 + 'px'
					// });
				};
			},

			loadImage = function( direction )
			{
				if( inProgress ) return false;

				direction = typeof direction === 'undefined' ? false : direction == 'left' ? 1 : -1;

				if( image.length )
				{
					if( direction !== false && ( targets.length < 2 || ( options.quitOnEnd === true && ( ( direction === -1 && targets.index( target ) == 0 ) || ( direction === 1 && targets.index( target ) == targets.length - 1 ) ) ) ) )
					{
						quitLightbox();
						return false;
					}
					var params = { 'opacity': 0 };
					if( isCssTransitionSupport ) cssTransitionTranslateX( image, ( 100 * direction ) - swipeDiff + 'px', options.animationSpeed / 1000 );
					else params.left = parseInt( image.css( 'left' ) ) + 100 * direction + 'px';
					image.animate( params, options.animationSpeed, function(){ removeImage(); });
					swipeDiff = 0;
				}

				inProgress = true;
				if( options.onLoadStart !== false ) options.onLoadStart();

				setTimeout( function()
				{
					image = $( '<img ' + options.selector + ' />' )
					.attr( 'src', target.attr( 'href' ) )
					.load( function()
					{
						image.appendTo( '#imagelightbox-container' );
						setImage();

						var params = { 'opacity': 1 };

						image.css( 'opacity', 0 );
						if( isCssTransitionSupport )
						{
							cssTransitionTranslateX( image, -100 * direction + 'px', 0 );
							setTimeout( function(){ cssTransitionTranslateX( image, 0 + 'px', options.animationSpeed / 1000 ) }, 50 );
						}
						else
						{
							var imagePosLeft = parseInt( image.css( 'left' ) );
							params.left = imagePosLeft + 'px';
							image.css( 'left', imagePosLeft - 100 * direction + 'px' );
						}

						image.animate( params, options.animationSpeed, function()
						{
							inProgress = false;
							if( options.onLoadEnd !== false ) options.onLoadEnd();
						});
						if( options.preloadNext )
						{
							var nextTarget = targets.eq( targets.index( target ) + 1 );
							if( !nextTarget.length ) nextTarget = targets.eq( 0 );
							$( '<img />' ).attr( 'src', nextTarget.attr( 'href' ) ).load();
						}
					})
					.error( function()
					{
						if( options.onLoadEnd !== false ) options.onLoadEnd();
					})

					var swipeStart	 = 0,
						swipeEnd	 = 0,
						imagePosLeft = 0;

					image.on( hasPointers ? 'pointerup MSPointerUp' : 'click', function( e )
					{
						e.preventDefault();
						if( options.quitOnImgClick )
						{
							quitLightbox();
							return false;
						}
						if( wasTouched( e.originalEvent ) ) return true;
					    var posX = ( e.pageX || e.originalEvent.pageX ) - e.target.offsetLeft;
						target = targets.eq( targets.index( target ) - ( imageWidth / 2 > posX ? 1 : -1 ) );
						if( !target.length ) target = targets.eq( imageWidth / 2 > posX ? targets.length : 0 );
						loadImage( imageWidth / 2 > posX ? 'left' : 'right' );
					})
					.on( 'touchstart pointerdown MSPointerDown', function( e )
					{
						if( !wasTouched( e.originalEvent ) || options.quitOnImgClick ) return true;
						if( isCssTransitionSupport ) imagePosLeft = parseInt( image.css( 'left' ) );
						swipeStart = e.originalEvent.pageX || e.originalEvent.touches[ 0 ].pageX;
					})
					.on( 'touchmove pointermove MSPointerMove', function( e )
					{
						if( !wasTouched( e.originalEvent ) || options.quitOnImgClick ) return true;
						e.preventDefault();
						swipeEnd = e.originalEvent.pageX || e.originalEvent.touches[ 0 ].pageX;
						swipeDiff = swipeStart - swipeEnd;
						if( isCssTransitionSupport ) cssTransitionTranslateX( image, -swipeDiff + 'px', 0 );
						else image.css( 'left', imagePosLeft - swipeDiff + 'px' );
					})
					.on( 'touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel', function( e )
					{
						if( !wasTouched( e.originalEvent ) || options.quitOnImgClick ) return true;
						if( Math.abs( swipeDiff ) > 50 )
						{
							target = targets.eq( targets.index( target ) - ( swipeDiff < 0 ? 1 : -1 ) );
							if( !target.length ) target = targets.eq( swipeDiff < 0 ? targets.length : 0 );
							loadImage( swipeDiff > 0 ? 'right' : 'left' );	
						}
						else
						{
							if( isCssTransitionSupport ) cssTransitionTranslateX( image, 0 + 'px', options.animationSpeed / 1000 );
							else image.animate({ 'left': imagePosLeft + 'px' }, options.animationSpeed / 2 );
						}
					});

				}, options.animationSpeed + 100 );
			},

			removeImage = function()
			{
				if( !image.length ) return false;
				image.remove();
				image = $();
			},

			quitLightbox = function()
			{
				if( !image.length ) return false;
				image.animate({ 'opacity': 0 }, options.animationSpeed, function()
				{
					removeImage();
					inProgress = false;
					if( options.onEnd !== false ) options.onEnd();
				});
			};

		$( window ).on( 'resize', setImage );

		if( options.quitOnDocClick )
		{
			$( document ).on( hasTouch ? 'touchend' : 'click', function( e )
			{
				if( image.length && !$( e.target ).is( image ) ) quitLightbox();
			})
		}

		if( options.enableKeyboard )
		{
			$( document ).on( 'keyup', function( e )
			{
				if( !image.length ) return true;
				e.preventDefault();
				if( e.keyCode == 27 ) quitLightbox();
				if( e.keyCode == 37 || e.keyCode == 39 )
				{
					target = targets.eq( targets.index( target ) - ( e.keyCode == 37 ? 1 : -1 ) );
					if( !target.length ) target = targets.eq( e.keyCode == 37 ? targets.length : 0 );
					loadImage( e.keyCode == 37 ? 'left' : 'right' );
				}
			});
		}

		$( document ).on( 'click', this.selector, function( e )
		{
			if( !isTargetValid( this ) ) return true;
			e.preventDefault();
			if( inProgress ) return false;
			inProgress = false;
			if( options.onStart !== false ) options.onStart();
			target = $( this );
			loadImage();
		});

		this.each( function()
		{
			if( !isTargetValid( this ) ) return true;
			targets = targets.add( $( this ) );
		});

		this.switchImageLightbox = function( index )
		{
			var tmpTarget = targets.eq( index );
			if( tmpTarget.length )
			{
				var currentIndex = targets.index( target );
				target = tmpTarget;
				loadImage( index < currentIndex ? 'left' : 'right' );
			}
			return this;
		};

		this.quitImageLightbox = function()
		{
			quitLightbox();
			return this;
		};

		return this;
	};
	
})( jQuery, window, document );
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.3.6
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                responsiveSettings, breakpoint;

            _.defaults = {
                accessibility: true,
                appendArrows: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" class="slick-prev">Previous</button>',
                nextArrow: '<button type="button" class="slick-next">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return '<button type="button">' + (i + 1) + '</button>';
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                fade: false,
                focusOnSelect: false,
                infinite: true,
                lazyLoad: 'ondemand',
                onBeforeChange: null,
                onAfterChange: null,
                onInit: null,
                onReInit: null,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                responsive: null,
                slide: 'div',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                swipe: true,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                vertical: false
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentSlide: 0,
                currentLeft: null,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.paused = false;
            _.positionProp = null;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.windowWidth = 0;
            _.windowTimer = null;

            _.options = $.extend({}, _.defaults, settings);

            _.originalSettings = _.options;
            responsiveSettings = _.options.responsive || null;

            if (responsiveSettings && responsiveSettings.length > -1) {
                for (breakpoint in responsiveSettings) {
                    if (responsiveSettings.hasOwnProperty(breakpoint)) {
                        _.breakpoints.push(responsiveSettings[
                            breakpoint].breakpoint);
                        _.breakpointSettings[responsiveSettings[
                            breakpoint].breakpoint] =
                            responsiveSettings[breakpoint].settings;
                    }
                }
                _.breakpoints.sort(function(a, b) {
                    return b - a;
                });
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.init();

        }

        return Slick;

    }());

    Slick.prototype.addSlide = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).remove();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr("index",index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateSlide = function(targetLeft,
        callback) {

        var animProps = {}, _ = this;

        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {

                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

        if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator,
                _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this;
        var asNavFor = _.options.asNavFor != null ? $(_.options.asNavFor).getSlick() : null;

        if (_.options.infinite === false) {

            if (_.direction === 1) {

                if ((_.currentSlide + 1) === _.slideCount -
                    1) {
                    _.direction = 0;
                }

                _.slideHandler(_.currentSlide + _.options.slidesToScroll);
                if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll);

            } else {

                if ((_.currentSlide - 1 === 0)) {

                    _.direction = 1;

                }

                _.slideHandler(_.currentSlide - _.options.slidesToScroll);
                if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll);

            }

        } else {

            _.slideHandler(_.currentSlide + _.options.slidesToScroll);
            if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll);

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow = $(_.options.prevArrow);
            _.$nextArrow = $(_.options.nextArrow);

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.appendTo(_.options.appendArrows);
            }

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
            }

            if (_.options.infinite !== true) {
                _.$prevArrow.addClass('slick-disabled');
            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dotString;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            dotString = '<ul class="' + _.options.dotsClass + '">';

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dotString += '<li>' + _.options.customPaging.call(this, _, i) + '</li>';
            }

            dotString += '</ul>';

            _.$dots = $(dotString).appendTo(
                _.$slider);

            _.$dots.find('li').first().addClass(
                'slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide +
            ':not(.slick-cloned)').addClass(
            'slick-slide');
        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element).attr("index",index);
        });

        _.$slidesCache = _.$slides;

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true) {
            _.options.slidesToScroll = 1;
            if (_.options.slidesToShow % 2 === 0) {
                _.options.slidesToShow = 3;
            }
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        if (_.options.accessibility === true) {
            _.$list.prop('tabIndex', 0);
        }

        _.setSlideClasses(typeof this.currentSlide === 'number' ? this.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.checkResponsive = function() {

        var _ = this,
            breakpoint, targetBreakpoint;

        if (_.originalSettings.responsive && _.originalSettings
            .responsive.length > -1 && _.originalSettings.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if ($(window).width() < _.breakpoints[
                        breakpoint]) {
                        targetBreakpoint = _.breakpoints[
                            breakpoint];
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        _.options = $.extend({}, _.options,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        _.refresh();
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    _.options = $.extend({}, _.options,
                        _.breakpointSettings[
                            targetBreakpoint]);
                    _.refresh();
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = $.extend({}, _.options,
                        _.originalSettings);
                    _.refresh();
                }
            }

        }

    };

    Slick.prototype.changeSlide = function(event) {

        var _ = this,
            $target = $(event.target);
        var asNavFor = _.options.asNavFor != null ? $(_.options.asNavFor).getSlick() : null;

        // If target is a link, prevent default action.
        $target.is('a') && event.preventDefault();

        switch (event.data.message) {

            case 'previous':
                if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide - _.options
                    .slidesToScroll);
                if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll);
                }
                break;

            case 'next':
                if (_.slideCount > _.options.slidesToShow) {
                  _.slideHandler(_.currentSlide + _.options
                    .slidesToScroll);
                if(asNavFor != null)  asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll);
                }
                break;

            case 'index':
                var index = $(event.target).parent().index() * _.options.slidesToScroll;
                _.slideHandler(index);
                if(asNavFor != null)  asNavFor.slideHandler(index);                break;

            default:
                return false;
        }

    };

    Slick.prototype.destroy = function() {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow) {
            _.$prevArrow.remove();
            _.$nextArrow.remove();
        }
        if (_.$slides.parent().hasClass('slick-track')) {
            _.$slides.unwrap().unwrap();
        }
        _.$slides.removeClass(
            'slick-slide slick-active slick-visible').removeAttr('style');
        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');

        _.$list.off('.slick');
        $(window).off('.slick-' + _.instanceUid);
    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = "";

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: 1000
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: 1000
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.filterSlides = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).remove();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.getCurrent = function() {

        var _ = this;

        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this,
            breaker = 0,
            dotCounter = 0,
            dotCount = 0,
            dotLimit;

        dotLimit = _.options.infinite === true ? _.slideCount + _.options.slidesToShow - _.options.slidesToScroll : _.slideCount;

        while (breaker < dotLimit) {
            dotCount++;
            dotCounter += _.options.slidesToScroll;
            breaker = dotCounter + _.options.slidesToShow;
        }

        return dotCount;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight();

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    _.slideOffset = ((_.slideCount % _.options.slidesToShow) * _.slideWidth) * -1;
                    verticalOffset = ((_.slideCount % _.options.slidesToShow) * verticalHeight) * -1;
                }
            }
        } else {
            if (_.slideCount % _.options.slidesToShow !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    _.slideOffset = (_.options.slidesToShow * _.slideWidth) - ((_.slideCount % _.options.slidesToShow) * _.slideWidth);
                    verticalOffset = ((_.slideCount % _.options.slidesToShow) * verticalHeight);
                }
            }
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        return targetLeft;

    };

    Slick.prototype.init = function() {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.checkResponsive();
        }

        if (_.options.onInit !== null) {
            _.options.onInit.call(this, _);
        }

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.on('click.slick', {
                message: 'next'
            }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
            $('li', _.$dots)
                .on('mouseenter.slick', _.autoPlayClear)
                .on('mouseleave.slick', _.autoPlay);
        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        if (_.options.pauseOnHover === true && _.options.autoplay === true) {
            _.$list.on('mouseenter.slick', _.autoPlayClear);
            _.$list.on('mouseleave.slick', _.autoPlay);
        }

        if(_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if(_.options.focusOnSelect === true) {
            $(_.options.slide, _.$slideTrack).on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, function() {
            _.checkResponsive();
            _.setPosition();
        });

        $(window).on('resize.slick.slick-' + _.instanceUid, function() {
            if ($(window).width !== _.windowWidth) {
                clearTimeout(_.windowDelay);
                _.windowDelay = window.setTimeout(function() {
                    _.windowWidth = $(window).width();
                    _.checkResponsive();
                    _.setPosition();
                }, 50);
            }
        });

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

        if (_.options.autoplay === true) {

            _.autoPlay();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;

        if (event.keyCode === 37) {
            _.changeSlide({
                data: {
                    message: 'previous'
                }
            });
        } else if (event.keyCode === 39) {
            _.changeSlide({
                data: {
                    message: 'next'
                }
            });
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {
            $('img[data-lazy]', imagesScope).each(function() {
                var image = $(this),
                    imageSource = $(this).attr('data-lazy');

                image
                  .css({ opacity: 0 })
                  .attr('src', imageSource)
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .load(function() { image.animate({ opacity: 1 }, 200); });
            });
        }

        if (_.options.centerMode === true || _.options.fade === true ) {
            rangeStart = _.options.slidesToShow + _.currentSlide - 1;
            rangeEnd = rangeStart + _.options.slidesToShow + 2;
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = rangeStart + _.options.slidesToShow;
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

          if (_.slideCount == 1){
              cloneRange = _.$slider.find('.slick-slide')
              loadImages(cloneRange)
          }else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange)
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if (_.options.onAfterChange !== null) {
            _.options.onAfterChange.call(this, _, index);
        }

        _.animating = false;

        _.setPosition();

        _.swipeLeft = null;

        if (_.options.autoplay === true && _.paused === false) {
            _.autoPlay();
        }

    };

    Slick.prototype.progressiveLazyLoad = function() {

        var _ = this,
            imgCount, targetImage;

        imgCount = $('img[data-lazy]').length;

        if (imgCount > 0) {
            targetImage = $('img[data-lazy]', _.$slider).first();
            targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
                targetImage.removeAttr('data-lazy');
                _.progressiveLazyLoad();
            });
        }

    };

    Slick.prototype.refresh = function() {

        var _ = this,
            currentSlide = _.currentSlide;

        _.destroy();

        $.extend(_, _.initials);

        _.currentSlide = currentSlide;
        _.init();

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass(
            'slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        if(_.options.focusOnSelect === true) {
            $(_.options.slide, _.$slideTrack).on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(0);

        _.setPosition();

        if (_.options.onReInit !== null) {
            _.options.onReInit.call(this, _);
        }

    };

    Slick.prototype.removeSlide = function(index, removeBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        _.$slideTrack.children(this.options.slide).eq(index).remove();

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).remove();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {}, x, y;

        x = _.positionProp == 'left' ? position + 'px' : '0px';
        y = _.positionProp == 'top' ? position + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if(_.options.vertical === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));
        
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            $(element).css({
                position: 'relative',
                left: targetLeft,
                top: 0,
                zIndex: 800,
                opacity: 0
            });
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: 900,
            opacity: 1
        });

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

    };

    Slick.prototype.setProps = function() {

        var _ = this;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (document.body.style.WebkitTransition !== undefined ||
            document.body.style.MozTransition !== undefined ||
            document.body.style.msTransition !== undefined) {
            if(_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (document.body.style.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = "-moz-transform";
            _.transitionType = 'MozTransition';
        }
        if (document.body.style.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = "-webkit-transform";
            _.transitionType = 'webkitTransition';
        }
        if (document.body.style.msTransform !== undefined) {
            _.animType = 'transform';
            _.transformType = "transform";
            _.transitionType = 'transition';
        }

        _.transformsEnabled = (_.animType !== null);

    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset;

        _.$slider.find('.slick-slide').removeClass('slick-active').removeClass('slick-center');
        allSlides = _.$slider.find('.slick-slide');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if(_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active');
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active');
                }

                if (index === 0) {
                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {
                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }

            }

            _.$slides.eq(index).addClass('slick-center');

        } else {

            if (index > 0 && index < (_.slideCount - _.options.slidesToShow)) {
                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active');
            } else if ( allSlides.length <= _.options.slidesToShow ) {
                allSlides.addClass('slick-active');
            } else {
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
                allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active');
            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true || _.options.vertical === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').prependTo(
                        _.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').appendTo(
                        _.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;
        var asNavFor = _.options.asNavFor != null ? $(_.options.asNavFor).getSlick() : null;
        var index = parseInt($(event.target).parent().attr("index"));
        if(!index) index = 0;

        if(_.slideCount <= _.options.slidesToShow){
            return;
        }
        _.slideHandler(index);

        if(asNavFor != null){
            if(asNavFor.slideCount <= asNavFor.options.slidesToShow){
                return;
            }
            asNavFor.slideHandler(index);
        }
    };

    Slick.prototype.slideHandler = function(index) {

        var targetSlide, animSlide, slideLeft, unevenOffset, targetLeft = null,
            _ = this;

        if (_.animating === true) {
            return false;
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0 ? _.options.slidesToScroll : 0;

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > (_.slideCount - _.options.slidesToShow + unevenOffset))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                _.animateSlide(slideLeft, function() {
                    _.postSlide(targetSlide);
                });
            }
            return false;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if(_.options.fade === false) {
                targetSlide = _.currentSlide;
                _.animateSlide(slideLeft, function() {
                    _.postSlide(targetSlide);
                });
            }
            return false;
        }

        if (_.options.autoplay === true) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount - _.options.slidesToScroll;
            }
        } else if (targetSlide > (_.slideCount - 1)) {
            animSlide = 0;
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        if (_.options.onBeforeChange !== null && index !== _.currentSlide) {
            _.options.onBeforeChange.call(this, _, _.currentSlide, animSlide);
        }

        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            _.fadeSlide(animSlide, function() {
                _.postSlide(animSlide);
            });
            return false;
        }

        _.animateSlide(targetLeft, function() {
            _.postSlide(animSlide);
        });

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return 'left';
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return 'left';
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return 'right';
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this;
        var asNavFor = _.options.asNavFor != null ? $(_.options.asNavFor).getSlick() : null;

        _.dragging = false;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            $(event.target).on('click.slick', function(event) {
                event.stopImmediatePropagation();
                event.stopPropagation();
                event.preventDefault();
                $(event.target).off('click.slick');
            });

            switch (_.swipeDirection()) {
                case 'left':
                    _.slideHandler(_.currentSlide + _.options.slidesToScroll);
                    if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide + asNavFor.options.slidesToScroll);
                    _.touchObject = {};
                    break;

                case 'right':
                    _.slideHandler(_.currentSlide - _.options.slidesToScroll);
                    if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide - asNavFor.options.slidesToScroll);
                    _.touchObject = {};
                    break;
            }
        } else {
            if(_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                if(asNavFor != null) asNavFor.slideHandler(asNavFor.currentSlide);
                _.touchObject = {};
            }
        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
           return;
        } else if ((_.options.draggable === false) || (_.options.draggable === false && !event.originalEvent.touches)) {
           return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            curLeft, swipeDirection, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        curLeft = _.getLeft(_.currentSlide);

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = _.touchObject.curX > _.touchObject.startX ? 1 : -1;

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + _.touchObject.swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (_.touchObject
                .swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).remove();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow) {
            _.$prevArrow.remove();
            _.$nextArrow.remove();
        }
        _.$slides.removeClass(
            'slick-slide slick-active slick-visible').removeAttr('style');

    };

    Slick.prototype.updateArrows = function() {

        var _ = this;

        if (_.options.arrows === true && _.options.infinite !==
            true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.removeClass('slick-disabled');
            _.$nextArrow.removeClass('slick-disabled');
            if (_.currentSlide === 0) {
                _.$prevArrow.addClass('slick-disabled');
                _.$nextArrow.removeClass('slick-disabled');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                _.$nextArrow.addClass('slick-disabled');
                _.$prevArrow.removeClass('slick-disabled');
            }
        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active');
            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');

        }

    };

    $.fn.slick = function(options) {
        var _ = this;
        return _.each(function(index, element) {

            element.slick = new Slick(element, options);

        });
    };

    $.fn.slickAdd = function(slide, slideIndex, addBefore) {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.addSlide(slide, slideIndex, addBefore);

        });
    };

    $.fn.slickCurrentSlide = function() {
        var _ = this;
        return _.get(0).slick.getCurrent();
    };

    $.fn.slickFilter = function(filter) {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.filterSlides(filter);

        });
    };

    $.fn.slickGoTo = function(slide) {
        var _ = this;
        return _.each(function(index, element) {

            var asNavFor = element.slick.options.asNavFor != null ? $(element.slick.options.asNavFor) : null;
            if(asNavFor != null) asNavFor.slickGoTo(slide);
            element.slick.slideHandler(slide);

        });
    };

    $.fn.slickNext = function() {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.changeSlide({
                data: {
                    message: 'next'
                }
            });

        });
    };

    $.fn.slickPause = function() {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.autoPlayClear();
            element.slick.paused = true;

        });
    };

    $.fn.slickPlay = function() {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.paused = false;
            element.slick.autoPlay();

        });
    };

    $.fn.slickPrev = function() {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.changeSlide({
                data: {
                    message: 'previous'
                }
            });

        });
    };

    $.fn.slickRemove = function(slideIndex, removeBefore) {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.removeSlide(slideIndex, removeBefore);

        });
    };

    $.fn.slickGetOption = function(option) {
        var _ = this;
        return _.get(0).slick.options[option];
    };

    $.fn.slickSetOption = function(option, value, refresh) {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.options[option] = value;

            if (refresh === true) {
                element.slick.unload();
                element.slick.reinit();
            }

        });
    };

    $.fn.slickUnfilter = function() {
        var _ = this;
        return _.each(function(index, element) {

            element.slick.unfilterSlides();

        });
    };

    $.fn.unslick = function() {
        var _ = this;
        return _.each(function(index, element) {

          if (element.slick) {
            element.slick.destroy();
          }

        });
    };

    $.fn.getSlick = function() {
        var s = null;
        var _ = this;
        _.each(function(index, element) {
            s = element.slick;
        });

        return s;
    };

}));

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function($) {
        return factory($, root);
      });
    } else {
      return factory(root.jQuery, root);
    }
  })(window, function($, window) {
    var $w, Context, Waypoint, allWaypoints, contextCounter, contextKey, contexts, isTouch, jQMethods, methods, resizeEvent, scrollEvent, waypointCounter, waypointKey, wp, wps;

    $w = $(window);
    isTouch = __indexOf.call(window, 'ontouchstart') >= 0;
    allWaypoints = {
      horizontal: {},
      vertical: {}
    };
    contextCounter = 1;
    contexts = {};
    contextKey = 'waypoints-context-id';
    resizeEvent = 'resize.waypoints';
    scrollEvent = 'scroll.waypoints';
    waypointCounter = 1;
    waypointKey = 'waypoints-waypoint-ids';
    wp = 'waypoint';
    wps = 'waypoints';
    Context = (function() {
      function Context($element) {
        var _this = this;

        this.$element = $element;
        this.element = $element[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + contextCounter++;
        this.oldScroll = {
          x: $element.scrollLeft(),
          y: $element.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[contextKey] = this.id;
        contexts[this.id] = this;
        $element.bind(scrollEvent, function() {
          var scrollHandler;

          if (!(_this.didScroll || isTouch)) {
            _this.didScroll = true;
            scrollHandler = function() {
              _this.doScroll();
              return _this.didScroll = false;
            };
            return window.setTimeout(scrollHandler, $[wps].settings.scrollThrottle);
          }
        });
        $element.bind(resizeEvent, function() {
          var resizeHandler;

          if (!_this.didResize) {
            _this.didResize = true;
            resizeHandler = function() {
              $[wps]('refresh');
              return _this.didResize = false;
            };
            return window.setTimeout(resizeHandler, $[wps].settings.resizeThrottle);
          }
        });
      }

      Context.prototype.doScroll = function() {
        var axes,
          _this = this;

        axes = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left'
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up'
          }
        };
        if (isTouch && (!axes.vertical.oldScroll || !axes.vertical.newScroll)) {
          $[wps]('refresh');
        }
        $.each(axes, function(aKey, axis) {
          var direction, isForward, triggered;

          triggered = [];
          isForward = axis.newScroll > axis.oldScroll;
          direction = isForward ? axis.forward : axis.backward;
          $.each(_this.waypoints[aKey], function(wKey, waypoint) {
            var _ref, _ref1;

            if ((axis.oldScroll < (_ref = waypoint.offset) && _ref <= axis.newScroll)) {
              return triggered.push(waypoint);
            } else if ((axis.newScroll < (_ref1 = waypoint.offset) && _ref1 <= axis.oldScroll)) {
              return triggered.push(waypoint);
            }
          });
          triggered.sort(function(a, b) {
            return a.offset - b.offset;
          });
          if (!isForward) {
            triggered.reverse();
          }
          return $.each(triggered, function(i, waypoint) {
            if (waypoint.options.continuous || i === triggered.length - 1) {
              return waypoint.trigger([direction]);
            }
          });
        });
        return this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll
        };
      };

      Context.prototype.refresh = function() {
        var axes, cOffset, isWin,
          _this = this;

        isWin = $.isWindow(this.element);
        cOffset = this.$element.offset();
        this.doScroll();
        axes = {
          horizontal: {
            contextOffset: isWin ? 0 : cOffset.left,
            contextScroll: isWin ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: isWin ? 0 : cOffset.top,
            contextScroll: isWin ? 0 : this.oldScroll.y,
            contextDimension: isWin ? $[wps]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return $.each(axes, function(aKey, axis) {
          return $.each(_this.waypoints[aKey], function(i, waypoint) {
            var adjustment, elementOffset, oldOffset, _ref, _ref1;

            adjustment = waypoint.options.offset;
            oldOffset = waypoint.offset;
            elementOffset = $.isWindow(waypoint.element) ? 0 : waypoint.$element.offset()[axis.offsetProp];
            if ($.isFunction(adjustment)) {
              adjustment = adjustment.apply(waypoint.element);
            } else if (typeof adjustment === 'string') {
              adjustment = parseFloat(adjustment);
              if (waypoint.options.offset.indexOf('%') > -1) {
                adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
              }
            }
            waypoint.offset = elementOffset - axis.contextOffset + axis.contextScroll - adjustment;
            if ((waypoint.options.onlyOnScroll && (oldOffset != null)) || !waypoint.enabled) {
              return;
            }
            if (oldOffset !== null && (oldOffset < (_ref = axis.oldScroll) && _ref <= waypoint.offset)) {
              return waypoint.trigger([axis.backward]);
            } else if (oldOffset !== null && (oldOffset > (_ref1 = axis.oldScroll) && _ref1 >= waypoint.offset)) {
              return waypoint.trigger([axis.forward]);
            } else if (oldOffset === null && axis.oldScroll >= waypoint.offset) {
              return waypoint.trigger([axis.forward]);
            }
          });
        });
      };

      Context.prototype.checkEmpty = function() {
        if ($.isEmptyObject(this.waypoints.horizontal) && $.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([resizeEvent, scrollEvent].join(' '));
          return delete contexts[this.id];
        }
      };

      return Context;

    })();
    Waypoint = (function() {
      function Waypoint($element, context, options) {
        var idList, _ref;

        if (options.offset === 'bottom-in-view') {
          options.offset = function() {
            var contextHeight;

            contextHeight = $[wps]('viewportHeight');
            if (!$.isWindow(context.element)) {
              contextHeight = context.$element.height();
            }
            return contextHeight - $(this).outerHeight();
          };
        }
        this.$element = $element;
        this.element = $element[0];
        this.axis = options.horizontal ? 'horizontal' : 'vertical';
        this.callback = options.handler;
        this.context = context;
        this.enabled = options.enabled;
        this.id = 'waypoints' + waypointCounter++;
        this.offset = null;
        this.options = options;
        context.waypoints[this.axis][this.id] = this;
        allWaypoints[this.axis][this.id] = this;
        idList = (_ref = this.element[waypointKey]) != null ? _ref : [];
        idList.push(this.id);
        this.element[waypointKey] = idList;
      }

      Waypoint.prototype.trigger = function(args) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, args);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      Waypoint.prototype.disable = function() {
        return this.enabled = false;
      };

      Waypoint.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true;
      };

      Waypoint.prototype.destroy = function() {
        delete allWaypoints[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      Waypoint.getWaypointsByElement = function(element) {
        var all, ids;

        ids = element[waypointKey];
        if (!ids) {
          return [];
        }
        all = $.extend({}, allWaypoints.horizontal, allWaypoints.vertical);
        return $.map(ids, function(id) {
          return all[id];
        });
      };

      return Waypoint;

    })();
    methods = {
      init: function(f, options) {
        var _ref;

        options = $.extend({}, $.fn[wp].defaults, options);
        if ((_ref = options.handler) == null) {
          options.handler = f;
        }
        this.each(function() {
          var $this, context, contextElement, _ref1;

          $this = $(this);
          contextElement = (_ref1 = options.context) != null ? _ref1 : $.fn[wp].defaults.context;
          if (!$.isWindow(contextElement)) {
            contextElement = $this.closest(contextElement);
          }
          contextElement = $(contextElement);
          context = contexts[contextElement[0][contextKey]];
          if (!context) {
            context = new Context(contextElement);
          }
          return new Waypoint($this, context, options);
        });
        $[wps]('refresh');
        return this;
      },
      disable: function() {
        return methods._invoke.call(this, 'disable');
      },
      enable: function() {
        return methods._invoke.call(this, 'enable');
      },
      destroy: function() {
        return methods._invoke.call(this, 'destroy');
      },
      prev: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index > 0) {
            return stack.push(waypoints[index - 1]);
          }
        });
      },
      next: function(axis, selector) {
        return methods._traverse.call(this, axis, selector, function(stack, index, waypoints) {
          if (index < waypoints.length - 1) {
            return stack.push(waypoints[index + 1]);
          }
        });
      },
      _traverse: function(axis, selector, push) {
        var stack, waypoints;

        if (axis == null) {
          axis = 'vertical';
        }
        if (selector == null) {
          selector = window;
        }
        waypoints = jQMethods.aggregate(selector);
        stack = [];
        this.each(function() {
          var index;

          index = $.inArray(this, waypoints[axis]);
          return push(stack, index, waypoints[axis]);
        });
        return this.pushStack(stack);
      },
      _invoke: function(method) {
        this.each(function() {
          var waypoints;

          waypoints = Waypoint.getWaypointsByElement(this);
          return $.each(waypoints, function(i, waypoint) {
            waypoint[method]();
            return true;
          });
        });
        return this;
      }
    };
    $.fn[wp] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (methods[method]) {
        return methods[method].apply(this, args);
      } else if ($.isFunction(method)) {
        return methods.init.apply(this, arguments);
      } else if ($.isPlainObject(method)) {
        return methods.init.apply(this, [null, method]);
      } else if (!method) {
        return $.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return $.error("The " + method + " method does not exist in jQuery Waypoints.");
      }
    };
    $.fn[wp].defaults = {
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    jQMethods = {
      refresh: function() {
        return $.each(contexts, function(i, context) {
          return context.refresh();
        });
      },
      viewportHeight: function() {
        var _ref;

        return (_ref = window.innerHeight) != null ? _ref : $w.height();
      },
      aggregate: function(contextSelector) {
        var collection, waypoints, _ref;

        collection = allWaypoints;
        if (contextSelector) {
          collection = (_ref = contexts[$(contextSelector)[0][contextKey]]) != null ? _ref.waypoints : void 0;
        }
        if (!collection) {
          return [];
        }
        waypoints = {
          horizontal: [],
          vertical: []
        };
        $.each(waypoints, function(axis, arr) {
          $.each(collection[axis], function(key, waypoint) {
            return arr.push(waypoint);
          });
          arr.sort(function(a, b) {
            return a.offset - b.offset;
          });
          waypoints[axis] = $.map(arr, function(waypoint) {
            return waypoint.element;
          });
          return waypoints[axis] = $.unique(waypoints[axis]);
        });
        return waypoints;
      },
      above: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.y;
        });
      },
      below: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'vertical', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.y;
        });
      },
      left: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset <= context.oldScroll.x;
        });
      },
      right: function(contextSelector) {
        if (contextSelector == null) {
          contextSelector = window;
        }
        return jQMethods._filter(contextSelector, 'horizontal', function(context, waypoint) {
          return waypoint.offset > context.oldScroll.x;
        });
      },
      enable: function() {
        return jQMethods._invoke('enable');
      },
      disable: function() {
        return jQMethods._invoke('disable');
      },
      destroy: function() {
        return jQMethods._invoke('destroy');
      },
      extendFn: function(methodName, f) {
        return methods[methodName] = f;
      },
      _invoke: function(method) {
        var waypoints;

        waypoints = $.extend({}, allWaypoints.vertical, allWaypoints.horizontal);
        return $.each(waypoints, function(key, waypoint) {
          waypoint[method]();
          return true;
        });
      },
      _filter: function(selector, axis, test) {
        var context, waypoints;

        context = contexts[$(selector)[0][contextKey]];
        if (!context) {
          return [];
        }
        waypoints = [];
        $.each(context.waypoints[axis], function(i, waypoint) {
          if (test(context, waypoint)) {
            return waypoints.push(waypoint);
          }
        });
        waypoints.sort(function(a, b) {
          return a.offset - b.offset;
        });
        return $.map(waypoints, function(waypoint) {
          return waypoint.element;
        });
      }
    };
    $[wps] = function() {
      var args, method;

      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (jQMethods[method]) {
        return jQMethods[method].apply(null, args);
      } else {
        return jQMethods.aggregate.call(null, method);
      }
    };
    $[wps].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return $w.on('load.waypoints', function() {
      return $[wps]('refresh');
    });
  });

}).call(this);
// ----------------------------------------------------------------------------------------------------
// ScrollMe
// A jQuery plugin for adding simple scrolling effects to web pages
// http://scrollme.nckprsn.com
// ----------------------------------------------------------------------------------------------------
( function()
{
	$( function()
	{

	// ----------------------------------------------------------------------------------------------------
	// Globals

	var $document = $( document );
	var $window = $( window );

	var body_height = 0;

	var viewport_height = 0;

	var viewport_top = 0;
	var viewport_bottom = 0;

	var viewport_top_previous = -1;

	var elements = [];
	var elements_in_view = [];

	var property_defaults =
	{
		'opacity' : 1,
		'translatex' : 0,
		'translatey' : 0,
		'translatez' : 0,
		'rotatex' : 0,
		'rotatey' : 0,
		'rotatez' : 0,
		'scale' : 1
	};

	// ----------------------------------------------------------------------------------------------------
	// Initialisation

	init = function()
	{
		init_elements();

		on_resize();

		setInterval( update , 10 );

		// Recalculate heights & positions on resize and rotate

		$window.resize( on_resize );
		window.addEventListener( 'orientationchange' , function(){ on_resize(); } , false );

		// Recalculate heights & positions when page is fully loaded + a bit just in case

		$window.load( function(){ setTimeout( function(){ on_resize(); } , 1000 ) });
	}

	// ----------------------------------------------------------------------------------------------------
	// Get list and pre-load animated elements

	init_elements = function()
	{
		// For each reference element

		$( '.scrollme' ).each( function()
		{
			var element = {};

			element.element = $( this );

			var effects = [];

			// For each animated element

			$( this ).find( '.animateme' ).each( function()
			{
				// Get effect details

				var effect = {};

				effect.element = $( this );
				effect.when = effect.element.data( 'when' );
				effect.from = effect.element.data( 'from' );
				effect.to = effect.element.data( 'to' );

				// Get animated properties

				var properties = {};

				if( effect.element.is( '[data-opacity]' ) )    properties.opacity    = effect.element.data( 'opacity' );
				if( effect.element.is( '[data-translatex]' ) ) properties.translatex = effect.element.data( 'translatex' );
				if( effect.element.is( '[data-translatey]' ) ) properties.translatey = effect.element.data( 'translatey' );
				if( effect.element.is( '[data-translatez]' ) ) properties.translatez = effect.element.data( 'translatez' );
				if( effect.element.is( '[data-rotatex]' ) )    properties.rotatex    = effect.element.data( 'rotatex' );
				if( effect.element.is( '[data-rotatey]' ) )    properties.rotatey    = effect.element.data( 'rotatey' );
				if( effect.element.is( '[data-rotatez]' ) )    properties.rotatez    = effect.element.data( 'rotatez' );
				if( effect.element.is( '[data-scale]' ) )      properties.scale      = effect.element.data( 'scale' );

				effect.properties = properties;

				effects.push( effect );
			});

			element.effects = effects;

			elements.push( element );
		});
	}

	// ----------------------------------------------------------------------------------------------------
	// Update elements

	update = function()
	{
		window.requestAnimationFrame( function()
		{
			update_viewport_position();

			if( viewport_top_previous != viewport_top )
			{
				update_elements_in_view();
				animate();
			}

			viewport_top_previous = viewport_top;
		});
	}

	// ----------------------------------------------------------------------------------------------------
	// Animate stuff

	animate = function()
	{
		// For each element in viewport

		for( i=0 ; i<elements_in_view.length ; i++ )
		{
			var element = elements_in_view[i];

			// For each effect

			for( e=0 ; e<element.effects.length ; e++ )
			{
				var effect = element.effects[e];

				// Get boundaries of reference element

				switch( effect.when )
				{
					case 'view' :
						var start = element.top - viewport_height;
						var end = element.bottom;
						break;

					case 'exit' :
						var start = element.bottom - viewport_height;
						var end = element.bottom;
						break;

					default :
						var start = element.top - viewport_height;
						var end = element.top;
						break;
				}

				if( start < 0 ) start = 0;
				if( end > ( body_height - viewport_height ) ) end = body_height - viewport_height;

				// Get scroll position of reference selector

				var scroll = ( viewport_top - start ) / ( end - start );

				// Get relative scroll position for effect

				var from = effect[ 'from' ];
				var to = effect[ 'to' ];

				var length = to - from;

				var scroll_relative = ( scroll - from ) / length;

				// Apply easing

				var scroll_eased = easing( scroll_relative );

				// Get new value for each property

				var opacity    = animate_value( scroll , scroll_eased , from , to , effect , 'opacity' );
				var translatey = animate_value( scroll , scroll_eased , from , to , effect , 'translatey' );
				var translatex = animate_value( scroll , scroll_eased , from , to , effect , 'translatex' );
				var translatez = animate_value( scroll , scroll_eased , from , to , effect , 'translatez' );
				var rotatex    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatex' );
				var rotatey    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatey' );
				var rotatez    = animate_value( scroll , scroll_eased , from , to , effect , 'rotatez' );
				var scale      = animate_value( scroll , scroll_eased , from , to , effect , 'scale' );

				// Update properties

				effect.element.css(
				{
					'opacity' : opacity,
					'transform' : 'translate3d( '+translatex+'px , '+translatey+'px , '+translatez+'px ) rotateX( '+rotatex+'deg ) rotateY( '+rotatey+'deg ) rotateZ( '+rotatez+'deg ) scale( '+scale+' )'
				} );
			}
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Calculate property values

	animate_value = function( scroll , scroll_eased , from , to , effect , property )
	{
		var value_default = property_defaults[ property ];

		// Return default value if property is not animated

		if( !( property in effect.properties ) ) return value_default;

		var value_target = effect.properties[ property ];

		var forwards = ( to > from ) ? true : false;

		// Return boundary value if outside effect boundaries

		if( scroll < from && forwards ) { return value_default; }
		if( scroll > to && forwards ) { return value_target; }

		if( scroll > from && !forwards ) { return value_default; }
		if( scroll < to && !forwards ) { return value_target; }

		// Calculate new property value

		var new_value = value_default + ( scroll_eased * ( value_target - value_default ) );

		// Round as required

		switch( property )
		{
			case 'opacity'    : new_value = new_value.toFixed(2); break;
			case 'translatex' : new_value = new_value.toFixed(0); break;
			case 'translatey' : new_value = new_value.toFixed(0); break;
			case 'translatez' : new_value = new_value.toFixed(0); break;
			case 'rotatex'    : new_value = new_value.toFixed(0); break;
			case 'rotatey'    : new_value = new_value.toFixed(0); break;
			case 'rotatez'    : new_value = new_value.toFixed(0); break;
			case 'scale'      : new_value = new_value.toFixed(2); break;
			default : break;
		}

		// Done

		return new_value;
	}

	// ----------------------------------------------------------------------------------------------------
	// Easing function (cubic in/out)

	easing = function( x )
	{
		if( x < 0.5 )
		{
			return ( 4 * x * x * x );
		}
		else
		{
			x = 1 - x;
			return 1 - ( 4 * x * x * x ) ;
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Update viewport position

	update_viewport_position = function()
	{
		viewport_top = $window.scrollTop();
		viewport_bottom = viewport_top + viewport_height;
	}

	// ----------------------------------------------------------------------------------------------------
	// Update list of elements in view

	update_elements_in_view = function()
	{
		elements_in_view = [];

		for( i=0 ; i<elements.length ; i++ )
		{
			if ( ( elements[i].top < viewport_bottom ) && ( elements[i].bottom > viewport_top ) )
			{
				elements_in_view.push( elements[i] );
			}
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Stuff to do on resize

	on_resize = function()
	{
		// Update viewport/element data

		update_viewport();
		update_element_heights();

		// Update display

		update_viewport_position();
		update_elements_in_view();
		animate();
	}

	// ----------------------------------------------------------------------------------------------------
	// Update viewport parameters

	update_viewport = function()
	{
		body_height = $document.height();
		viewport_height = $window.height();
	}

	// ----------------------------------------------------------------------------------------------------
	// Update height of animated elements

	update_element_heights = function()
	{
		for( i=0 ; i<elements.length ; i++ )
		{
			var element_height = elements[i].element.outerHeight();
			var position = elements[i].element.offset();

			elements[i].height = element_height;
			elements[i].top = position.top;
			elements[i].bottom = position.top + element_height;
		}
	}

	// ----------------------------------------------------------------------------------------------------
	// Run initialisation

	$document.ready( function(){ init(); });

	// ----------------------------------------------------------------------------------------------------

	})

}).call( this );

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(['jquery', 'waypoints'], factory);
    } else {
      return factory(root.jQuery);
    }
  })(window, function($) {
    var defaults, wrap;

    defaults = {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: 'stuck',
      direction: 'down right'
    };
    wrap = function($elements, options) {
      var $parent;

      $elements.wrap(options.wrapper);
      $parent = $elements.parent();
      return $parent.data('isWaypointStickyWrapper', true);
    };
    $.waypoints('extendFn', 'sticky', function(opt) {
      var $wrap, options, originalHandler;

      options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
      $wrap = wrap(this, options);
      originalHandler = options.handler;
      options.handler = function(direction) {
        var $sticky, shouldBeStuck;

        $sticky = $(this).children(':first');
        shouldBeStuck = options.direction.indexOf(direction) !== -1;
        $sticky.toggleClass(options.stuckClass, shouldBeStuck);
        $wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
        if (originalHandler != null) {
          return originalHandler.call(this, direction);
        }
      };
      $wrap.waypoint(options);
      return this.data('stuckClass', options.stuckClass);
    });
    return $.waypoints('extendFn', 'unsticky', function() {
      var $parent;

      $parent = this.parent();
      if (!$parent.data('isWaypointStickyWrapper')) {
        return this;
      }
      $parent.waypoint('destroy');
      this.unwrap();
      return this.removeClass(this.data('stuckClass'));
    });
  });

}).call(this);




// // Smooth Scroll

$(function() {
  $('a.menu-icon[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $.waypoints('refresh');
});

// // // Bootstrap scrollspy initialize

$(function(){
   if ($('nav').hasClass('expanded')) {
      $('#showLeftPush').addClass('button-expanded');
      $('.cbp-spmenu-push').addClass('cbp-spmenu-push-toright');
      $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
      $('.menu-item').addClass('divider');
   }
});

// // enable different divider states depending on media queries
$(function(){
   if ($(".cbp-spmenu-push").css("float") == "none" ){
      $('.menu-item').addClass('desktop');
   }
});

$(function(){
   if ($(".cbp-spmenu-push").css("float") == "left" ){
      $('.menu-item').removeClass('desktop');
   }
});

$( window ).resize(function() {
  if ($(".cbp-spmenu-push").css("float") == "left" ){
      $('.menu-item').removeClass('desktop');
   }
});

$( window ).resize(function() {
  if ($(".cbp-spmenu-push").css("float") == "none" ){
      $('.menu-item').addClass('desktop');
      $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
      $('nav').removeClass('expanded');
      $('.menu-item').removeClass('divider');
   }
});

// // click actions on mobile expand button

$('.separator').click(function() {
  $('#showLeftPush').removeClass('button-expanded');
  $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
  $('nav').removeClass('expanded');
});


$('.menu-item').on('click', function(){
  $('.menu-item').removeClass('active');
  $(this).addClass('active');
});

$('#showLeftPush').click(function() {
  $('.menu-item').toggleClass('divider');
  $(this).toggleClass('button-expanded');
  $('.cbp-spmenu-left').toggleClass('expanded');
  $('.cbp-spmenu-push').toggleClass('cbp-spmenu-push-toright');
});

$('.menu-icon').click(function() {
  $(this).parent().toggleClass('active');
});

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
  menuRight = document.getElementById( 'cbp-spmenu-s2' ),
  menuTop = document.getElementById( 'cbp-spmenu-s3' ),
  menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
  showLeft = document.getElementById( 'showLeft' ),
  showRight = document.getElementById( 'showRight' ),
  showTop = document.getElementById( 'showTop' ),
  showBottom = document.getElementById( 'showBottom' ),
  showLeftPush = document.getElementById( 'showLeftPush' ),
  left = document.getElementById( 'left' ),
  showRightPush = document.getElementById( 'showRightPush' ),
  body = document.body;


showLeftPush.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( body, 'cbp-spmenu-push-toright' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeftPush' );
};


function disableOther( button ) {
  if( button !== 'showLeft' ) {
    classie.toggle( showLeft, 'disabled' );
  }
  if( button !== 'left' ) {
    classie.toggle( left, 'disabled' );
  }
  if( button !== 'showRight' ) {
    classie.toggle( showRight, 'disabled' );
  }
  if( button !== 'showTop' ) {
    classie.toggle( showTop, 'disabled' );
  }
  if( button !== 'showBottom' ) {
    classie.toggle( showBottom, 'disabled' );
  }
  if( button !== 'showLeftPush' ) {
    classie.toggle( showLeftPush, 'disabled' );
  }
  if( button !== 'showRightPush' ) {
    classie.toggle( showRightPush, 'disabled' );
  }
}

$(function(){
  $( ".grid li:first-of-type" ).removeClass( "hidden" );
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })
});


$(function(){
  $('.indicators').waypoint({
    handler: function(direction,event) {
      if (direction === 'down') {
        $('.indicators').hide('slow');
      }
    },
    offset: '10%'
  });
});

$('.company-container').click(function(){
  $(this).toggleClass('active');
    var box = $(this).children('.company-text');
    var boxP = $(box).children('p');
    var boxE = $(boxP).children('p');
    $(box).children('.text').slideToggle( 700 );
});

$('body').scrollspy({ target: '.cbp-spmenu' });


// Case Studies Code

$('.case-study-wrapper').each(function(){

  var $this = $(this);
  var caseStudyText = $(this).find('.case-study-text');
  var caseStudyImage = $(this).find('.case-study-image');
  var previewText = $(this).find('.preview-text');
  var close = $(this).prev('.case-study-close');
  var $height = caseStudyText.height();

  $(caseStudyText).height(0);
  
  $(this).click(function(){
    $this.addClass('active');
    caseStudyText.height($height);
    caseStudyImage.addClass('active');
    previewText.removeClass('active');
  });

  $(this).click(function(){
    // close.delay(750).queue(function(){
    //   $(this).addClass('visible').dequeue();
    // });
    // caseStudyText.delay(0).queue(function(){
    //   $(this).addClass('active').dequeue();
    // });
    setTimeout(function(){
      $(close).addClass('visible');
    }, 200);
    setTimeout(function(){
      caseStudyText.addClass('active');
    }, 200);
  });

  $(close).click(function() {  

    // $(this).delay(0).queue(function(){
    //    $(this).removeClass('visible').dequeue();
    // });
    $(caseStudyText).removeClass('active');
    // $(this).removeClass('visible');
    setTimeout(function(){
      $(caseStudyText).height(0);
    }, 200);
    setTimeout(function(){
      $(close).removeClass('visible');
    }, 200);
    setTimeout(function(){
      $(caseStudyImage).removeClass('active');
    }, 200);
    setTimeout(function(){
      $($this).removeClass('active');
    }, 200);
    setTimeout(function(){
      $(previewText).addClass('active');
    }, 1300);

  });

});

$('.single-item').slick({
  infinite: false,
  arrows: true,
});

















