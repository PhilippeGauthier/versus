


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
      $('.triangle').addClass('button-expanded');
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
  $('.triangle').removeClass('button-expanded');
  $('.cbp-spmenu-push').removeClass('cbp-spmenu-push-toright');
  $('nav').removeClass('expanded');
});


$('.menu-item').on('click', function(){
  $('.menu-item').removeClass('active');
  $(this).addClass('active');
});

$('.triangle').click(function() {
  $('.menu-item').toggleClass('divider');
  $(this).toggleClass('button-expanded');
  $('.cbp-spmenu-left').toggleClass('expanded');
  $('.cbp-spmenu-push').toggleClass('cbp-spmenu-push-toright');
});

$('.menu-icon').click(function() {
  $(this).parent().toggleClass('active');
});

// var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
//   menuRight = document.getElementById( 'cbp-spmenu-s2' ),
//   menuTop = document.getElementById( 'cbp-spmenu-s3' ),
//   menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
//   showLeft = document.getElementById( 'showLeft' ),
//   showRight = document.getElementById( 'showRight' ),
//   showTop = document.getElementById( 'showTop' ),
//   showBottom = document.getElementById( 'showBottom' ),
//   triangle = document.getElementById( 'triangle' ),
//   left = document.getElementById( 'left' ),
//   showRightPush = document.getElementById( 'showRightPush' ),
//   body = document.body;


// triangle.onclick = function() {
//   classie.toggle( this, 'active' );
//   classie.toggle( body, 'cbp-spmenu-push-toright' );
//   classie.toggle( menuLeft, 'cbp-spmenu-open' );
//   disableOther( 'triangle' );
// };


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
    var mobile = $(this).parent();
    var text = $(this).find('.text');
    $(text).slideToggle( 700 );
});

$('body').scrollspy({ target: '.cbp-spmenu', offset: 100 });


// Case Studies Code

$('.case-study-wrapper').each(function(){

  var $this = $(this);
var maxHeight = Math.max.apply(null, $(this).find('.case-study-text').map(function ()
{
    return $(this).height();
}).get());
  var caseStudyText = $(this).find('.case-study-text');
  var caseStudyImage = $(this).find('.case-study-image');
  var caseStudyDesktop = $(this).find('.case-study-desktop');
  var caseStudyMobile = $(this).find('.case-study-mobile');
  var caseStudyContent = $(this).find('.case-study-content').first();
  var caseStudyContentText = $(caseStudyContent).find('.case-study-text');
  var previewText = $(this).find('.preview-text');
  var close = $(this).prev('.case-study-close');  
  var $height = caseStudyText.height();
  // console.log($height);
  $(caseStudyText).css("height","0");
  
  $(this).click(function(){
    $this.addClass('active');
    caseStudyText.css("min-height",maxHeight);
    // caseStudyContentText.css("min-height",maxHeight);
    // caseStudyContentText.animate({
    //   height: $height;
    // },500);
    caseStudyImage.addClass('active');
    previewText.removeClass('active');
    setTimeout(function(){
      $(close).addClass('visible');
    }, 200);
    setTimeout(function(){
      caseStudyText.addClass('active');
    }, 200);
    if($(this).hasClass('mobile')) {
      $('html,body').animate({
          scrollTop: $(this).offset().top -40
      }, 2000);
    }
  });

  $(close).click(function() {  

    $(caseStudyText).removeClass('active');
    setTimeout(function(){
      caseStudyText.css("min-height",0);
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
    caseStudyDesktop.slickGoTo(0);
    caseStudyMobile.slickGoTo(0);
  });

});


$('.case-study-desktop').slick({
  infinite: false,
  arrows: true,
});

$('.case-study-mobile').slick({
  infinite: false,
  arrows: true,
  dots: true,
});


// $(document).ready(function() 
//  {
//         
//  });  

// $(window).load(function(){
//     $('#cover').fadeOut(1000);
//     // $('head').append('<script type="text/javascript" charset="utf-8" src="animation_edgePreload.js"></script>');
//     // $('head').append('<style>.edgeLoad-EDGE-6766476 { visibility:hidden; }</style>');
// });

setTimeout(function(){
  $('.indicators').addClass('active');
}, 18000);

// Google Analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49261908-4', 'auto');
  ga('send', 'pageview');

















