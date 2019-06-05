/**
 * Within Viewport
 *
 * @description Determines whether an element is completely
 *              within the browser viewport
 * @author      Craig Patik, http://patik.com/
 * @version     0.0.3
 * @date        2014-03-03
 */
;(function() {
    /**
     * withinViewport
     * @param  {Object} [elem]      DOM Element, required
     * @param  {Object} [options]   Optional settings
     * @return {Boolean}            Whether the element was completely within the viewport
    */
    var withinViewport = function _withinViewport(elem, options) {
        var result = false,
            metadata = {},
            config = {},
            settings, useHtmlElem, isWithin, scrollOffset, elemOffset, arr, i, side;

        if (elem instanceof jQuery) {
            elem = elem.get(0);
        }

        if (typeof elem !== 'object' || elem.nodeType !== 1) {
            throw new Error('First argument must be an element');
        }

        if (elem.getAttribute('data-withinviewport-settings') && window.JSON) {
            metadata = JSON.parse(elem.getAttribute('data-withinviewport-settings'));
        }

        // Settings argument may be a simple string (`top`, `right`, etc)
        if (typeof options === 'string') {
            settings = {sides: options};
        }
        else {
            settings = options || {};
        }

        // Build configuration from defaults and given settings
        config.container = settings.container || metadata.container || withinViewport.defaults.container || document.body;
        config.sides = settings.sides || metadata.sides || withinViewport.defaults.sides || 'all';
        config.top = settings.top || metadata.top || withinViewport.defaults.top || 0;
        config.right = settings.right || metadata.right || withinViewport.defaults.right || 0;
        config.bottom = settings.bottom || metadata.bottom || withinViewport.defaults.bottom || 0;
        config.left = settings.left || metadata.left || withinViewport.defaults.left || 0;

        // Whether we can use the `<html`> element for `scrollTop`
        // Unfortunately at the moment I can't find a way to do this without UA-sniffing
        useHtmlElem = !/Chrome/.test(navigator.userAgent);

        // Element testing methods
        isWithin = {
            // Element is below the top edge of the viewport
            top: function _isWithin_top() {
                return elemOffset[1] >= scrollOffset[1] + config.top;
            },

            // Element is to the left of the right edge of the viewport
            right: function _isWithin_right() {
                var container = (config.container === document.body) ? window : config.container;

                return elemOffset[0] + elem.offsetWidth <= container.innerWidth + scrollOffset[0] - config.right;
            },

            // Element is above the bottom edge of the viewport
            bottom: function _isWithin_bottom() {
                var container = (config.container === document.body) ? window : config.container;

                return elemOffset[1] + elem.offsetHeight <= scrollOffset[1] + container.innerHeight - config.bottom;
            },

            // Element is to the right of the left edge of the viewport
            left: function _isWithin_left() {
                return elemOffset[0] >= scrollOffset[0] + config.left;
            },

            all: function _isWithin_all() {
                return (isWithin.top() && isWithin.right() && isWithin.bottom() && isWithin.left());
            }
        };

        // Current offset values
        scrollOffset = (function _scrollOffset() {
            var x = config.container.scrollLeft,
                y = config.container.scrollTop;

            if (y === 0) {
                if (config.container.pageYOffset) {
                    y = config.container.pageYOffset;
                }
                else if (window.pageYOffset) {
                    y = window.pageYOffset;
                }
                else {
                    if (config.container === document.body) {
                        if (useHtmlElem) {
                            y = (config.container.parentElement) ? config.container.parentElement.scrollTop : 0;
                        }
                        else {
                            y = (config.container.parentElement) ? config.container.parentElement.scrollTop : 0;
                        }
                    }
                    else {
                        y = (config.container.parentElement) ? config.container.parentElement.scrollTop : 0;
                    }
                }
            }

            if (x === 0) {
                if (config.container.pageXOffset) {
                    x = config.container.pageXOffset;
                }
                else if (window.pageXOffset) {
                    x = window.pageXOffset;
                }
                else {
                    if (config.container === document.body) {
                        x = (config.container.parentElement) ? config.container.parentElement.scrollLeft : 0;
                    }
                    else {
                        x = (config.container.parentElement) ? config.container.parentElement.scrollLeft : 0;
                    }
                }
            }

            return [x, y];
        }());

        elemOffset = (function _elemOffset() {
            var el = elem,
                x = 0,
                y = 0;

            if (el.parentNode) {
                x = el.offsetLeft;
                y = el.offsetTop;

                el = el.parentNode;
                while (el) {
                    if (el == config.container) {
                        break;
                    }

                    x += el.offsetLeft;
                    y += el.offsetTop;

                    el = el.parentNode;
                }
            }

            return [x, y];
        })();

        // Test the element against each side of the viewport that was requested
        arr = config.sides.split(' ');
        i = arr.length;
        while (i--) {
            side = arr[i].toLowerCase();
            if (/top|right|bottom|left|all/.test(side)) {
                if (isWithin[side]()) {
                    result = true;
                }
                else {
                    result = false;
                    // Quit as soon as the first failure is found
                    break;
                }
            }
        }

        return result;
    }; // end of `withinViewport()`

    // Default settings
    withinViewport.prototype.defaults = {
        container: document.body,
        sides: 'all',
        top: 300,
        right: 0,
        bottom: -200,
        left: 0
    };

    withinViewport.defaults = withinViewport.prototype.defaults;

    // Make function available globally
    window.withinViewport = withinViewport;

    /**
     * Optional enhancements and shortcuts
     *
     * @description Uncomment or comment these pieces as they apply to your project and coding preferences
     */

    // Shortcut methods for each side of the viewport
    // Ex: withinViewport.top(elem) is the same as withinViewport(elem, 'top')
    withinViewport.prototype.top = function _withinViewport_top(element) {
        return withinViewport(element, 'top');
    };

    withinViewport.prototype.right = function _withinViewport_right(element) {
        return withinViewport(element, 'right');
    };

    withinViewport.prototype.bottom = function _withinViewport_bottom(element) {
        return withinViewport(element, 'bottom');
    };

    withinViewport.prototype.left = function _withinViewport_left(element) {
        return withinViewport(element, 'left');
    };
})();

/**
 * Within Viewport jQuery Plugin
 *
 * @description Companion plugin for withinViewport.js
 * @author      Craig Patik, http://patik.com/
 * @version     0.0.3
 * @date        2014-03-03
 */

(function($) {
    /**
     * $.withinViewport()
     * @description          jQuery method
     * @param  {Object}      [settings] optional settings
     * @return {Collection}  Contains all elements that were within the viewport
    */
    $.fn.withinViewport = function(settings) {
        if (typeof settings === "string") { settings = {sides: settings}; }

        var opts = $.extend({}, settings, {sides: "all"}), elems = [];

        this.each(function() {
            if (withinViewport(this, opts)) {
              elems.push(this);
            }
        });

        return $(elems);
    };

    // Main custom selector
    $.extend($.expr[":"], {
        "within-viewport": function(element) {
            return withinViewport(element, "all");
        }
    });


    /**
     * Optional enhancements and shortcuts
     *
     * @description Uncomment or comment these pieces as they apply to your project and coding preferences
     */

    // Shorthand jQuery methods
    //
    $.fn.withinViewportTop = function(settings) {
        var opts;

        if (typeof settings === "string") { settings = {sides: settings}; }

        opts = $.extend({}, settings, {sides: "top"}), elems = [];

        this.each(function() {
            if (withinViewport(this, opts)) {
                elems.push(this);
            }
        });

        return $(elems);
    };

    $.fn.withinViewportRight = function(settings) {
        var opts;

        if (typeof settings === "string") { settings = {sides: settings}; }

        opts = $.extend({}, settings, {sides: "right"}), elems = [];

        this.each(function() {
            if (withinViewport(this, opts)) {
              elems.push(this);
            }
        });

        return $(elems);
    };

    $.fn.withinViewportBottom = function(settings) {
        var opts;

        if (typeof settings === "string") { settings = {sides: settings}; }

        opts = $.extend({}, settings, {sides: "bottom"}), elems = [];

        this.each(function() {
            if (withinViewport(this, opts)) {
                elems.push(this);
            }
        });

        return $(elems);
    };

    $.fn.withinViewportLeft = function(settings) {
        var opts;

        if (typeof settings === "string") { settings = {sides: settings}; }

        opts = $.extend({}, settings, {sides: "left"}), elems = [];

        this.each(function() {
            if (withinViewport(this, opts)) {
                elems.push(this);
            }
        });

        return $(elems);
    };

    // Custom jQuery selectors
    $.extend($.expr[":"], {
        "within-viewport-top": function(element) {
            return withinViewport(element, "top");
        },
        "within-viewport-right": function(element) {
            return withinViewport(element, "right");
        },
        "within-viewport-bottom": function(element) {
            return withinViewport(element, "bottom");
        },
        "within-viewport-left": function(element) {
            return withinViewport(element, "left");
        }
        // Example custom selector:
        //,
        // "within-viewport-top-left-45": function(element) {
        //     return withinViewport(element, {sides:'top left', top: 45, left: 45});
        // }
    });
}(jQuery));


// ScrollStart/ScrollStop events: http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
(function(){var e=jQuery.event.special,t="D"+ +(new Date),n="D"+(+(new Date)+1);e.scrollstart={setup:function(){var n,r=function(t){var r=this,i=arguments;if(n){clearTimeout(n)}else{t.type="scrollstart";jQuery.event.handle.apply(r,i)}n=setTimeout(function(){n=null},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(t,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(t))}};e.scrollstop={latency:300,setup:function(){var t,r=function(n){var r=this,i=arguments;if(t){clearTimeout(t)}t=setTimeout(function(){t=null;n.type="scrollstop";jQuery.event.dispatch.apply(r,i)},e.scrollstop.latency)};jQuery(this).bind("scroll",r).data(n,r)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(n))}}})();

// Demo code
(function($) {
  var wvdemo = {
    $boxes: null,
    $showBoundsCheck: null,

    init: function() {

      var $body = $("body"),
          boxCount = 100,
          boxWidth = 20,
          boxHTML = "", i;



      // Add a container and put the boxes inside
     

      // Set the styles so everything is nice and proportional to this device's screen
     
      // wvdemo.$boxesSteve = $(".steve > .bio-container");
      // wvdemo.$boxesAlexis = $(".alexis > .bio-container");
      wvdemo.$boxesRight = $(".bio-container");
      wvdemo.$namesSteve = $("#left-name");
      wvdemo.$namesAlexis = $("#left-name");
      wvdemo.events.init();


      // Update the <div>s for the first time
      wvdemo.updateBoxes();
      
    },

    events: {

      // Setup event listeners
      init: function() {
        // Scroll or window resize
        $(window).on("resize scroll", wvdemo.updateBoxes);
      },
    },





    
    // Uses the jQuery plugin
    updateBoxes: function() {
      // Reset all boxes to being considered out of view
      // wvdemo.$boxesSteve
      //   .removeClass("inview");

      // wvdemo.$boxesAlexis
      //   .removeClass("inview");

      wvdemo.$boxesRight
        .removeClass("inview");

      // Then run withinViewport() on them to reveal which ones are inside
      // wvdemo.$boxesSteve
      //   .withinViewport()
      //     .addClass("inview");
      // wvdemo.$boxesAlexis
      //   .withinViewport()
      //     .addClass("inview");
      wvdemo.$boxesRight
        .withinViewport()
          .addClass("inview");
    }

  };

  window.wvdemo = wvdemo;

  $(document).ready(wvdemo.init);

})(jQuery);





// $(document).scroll(function(){
//   if ($('.steve .date-container').hasClass('inview')) {
//     $('#left-name').toggleClass('active');
//   }
// });

// $(document).scroll(function(){
//   if ($('.alexis .date-container').hasClass('inview')) {
//     $('#right-name').toggleClass('active');
//   }
// });
