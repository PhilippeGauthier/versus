$('.bio-container.inview').addClass('active');

$( window ).unload(function() {
  $( "ul li:first-child" ).removeClass( "hidden" );
  // $('#names').waypoint('sticky', {
  //   offset: 60 // Apply "stuck" when element 30px from top
  // });
});

// Smooth Scroll

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

// // Bootstrap scrollspy initialize

// $('body').scrollspy({ target: 'nav' });
// $('[data-spy="scroll"]').each(function () {
//   var $spy = $(this).scrollspy('refresh')
// });

$(function(){
   if ($('nav').hasClass('expanded')) {
      $('#showLeftPush').addClass('button-expanded');
      $('.cbp-spmenu-push').addClass('cbp-spmenu-push-toright');
      $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
      $('.menu-item').addClass('divider');
      // $('li').removeClass('desktop');
   }
});

// enable different divider states depending on media queries
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

// click actions on mobile expand button

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
$.waypoints('refresh');
});


// Add lightbox to body on click
$('.case-study-image').click(function(){
    $('<div class="wrapper" id="imagelightbox-container"><div id="header"></div></div>').appendTo('body');
});

$('.company-image').click(function(){
    $('<div class="wrapper" id="imagelightbox-container"><div id="header-companies"><div id="header-companies-wrapper"></div></div></div>').appendTo('body');
});

$('a .case-study').click(function(){
    $(this).css("display","inline-block");
});


$(document).ready(function() {
$( "ul li:first-child" ).removeClass( "hidden" );
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


// $(function() {


//   var bio_container_steve = $('.bio-container-steve');
//   var bio_container_alexis = $('.bio-container-alexis');

//   bio_container_steve.waypoint({
//     handler: function(direction,event) {
//       var active_section = $(this);
//       if (direction === 'down') {
//           $(this).addClass('active');
//           $('#left-name').addClass('active');
//       }
//       else {
//           $(this).removeClass('active');
//           $('#left-name').removeClass('active');
//       }
//     },
//     offset: 'bottom-in-view'
//   });
//   bio_container_steve.waypoint({
//     handler: function(direction,event) {
//       var active_section = $(this);
//       if (direction === 'down') {
//           $(this).removeClass('active');
//           $('#left-name').removeClass('active');
//       }
//       else {
//           $(this).addClass('active');
//           $('#left-name').addClass('active');
//       }
//     },
//     offset: '300'
//   });

//   bio_container_alexis.waypoint({
//     handler: function(direction,event) {
//       var active_section = $(this);
//       if (direction === 'down') {
//           $(this).addClass('active');
//           $('#right-name').addClass('active');
//       }
//       else {
//           $(this).removeClass('active');
//           $('#right-name').removeClass('active');
//       }
//     },
//     offset: 'bottom-in-view'
//   });
//   bio_container_alexis.waypoint({
//     handler: function(direction,event) {
//       var active_section = $(this);
//       if (direction === 'down') {
//           $(this).removeClass('active');
//           $('#right-name').removeClass('active');
//       }
//       else {
//           $(this).addClass('active');
//           $('#right-name').addClass('active');
//       }
//     },
//     offset: '300'
//   });
//   $.waypoints('refresh');

// });

// Companies Code

//   var image_url = $('.inner-image').css('background-image'),
//     image;

// // Remove url() or in case of Chrome url("")
// image_url = image_url.match(/^url\("?(.+?)"?\)$/);

// if (image_url[1]) {
//     image_url = image_url[1];
//     image = new Image();

//     // just in case it is not already loaded
//     $(image).load(function () {
//         // alert(image.width + 'x' + image.height);
//     });
//     $('.inner-image').click(function(){
//       var oldHeight = $(this).height();
//     var aspectRatio = ( (image.width) / (image.height) )
//     var newHeight = ( ($(this).width() ) / (aspectRatio) );
//     var heightDifference = ( ((newHeight) - ($(this).height()) ) / 2);
//     var box = $(this).closest('.inner-image');
//     var boxP = $(box).children();
//     var boxE = $(boxP).children('p');

//     console.log(oldHeight);

//       if (box.hasClass('active')) {
//           // Animate the box out
//           animateBoxOut(box);
//       } else {
//           // Get the original left margin
//           animateBoxIn(box);
//       }

//   function animateBoxIn(box) {
//       // Animate the box in
//       $(box).addClass('active').animate({
//       height: newHeight,
//       top: -heightDifference,
//       bottom: heightDifference
//       }, 400, function() {
//         $(boxE).addClass('active');
//       });

//   }
//   // function animateBoxIn(boxP) {
//   //   $(boxP).addClass('active');
//   // }

//   function animateBoxOut(box) {
//       // Animate the box out
//       $(box).animate({
//       top: heightDifference,
//       bottom: -heightDifference,
//       height: 400
//       },400).removeClass('active');
//       $(boxE).removeClass('active');
//   }

//   });

//     image.src = image_url;
// }

$('.inner-image').click(function(){
  $(this).toggleClass('active');
    var box = $(this).closest('.inner-image');
    var boxP = $(box).children();
    var boxE = $(boxP).children('p');
    $(boxE).toggleClass('active');
});
