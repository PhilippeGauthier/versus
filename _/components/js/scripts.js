


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

$(window).load(function() {

  $('.case-study-wrapper').each(function(){

    var $this = $(this);
    var caseStudyText = $(this).find('.case-study-text');
    var caseStudyImage = $(this).find('.case-study-image');
    var $height = caseStudyText.outerHeight(true);
    console.log($height);
    var close = $(this).prev('.case-study-close');
    
    $(this).click(function(){
      caseStudyText.height($height);
      caseStudyImage.addClass('active');
    });

    $(this).click(function(){
      close.delay(750).queue(function(){
        $(this).addClass('visible').dequeue();
      });
      caseStudyText.delay(0).queue(function(){
        $(this).addClass('active').dequeue();
      });
    });

    $(caseStudyText).height(0);

    $(close).click(function() {  

      $(this).delay(0).queue(function(){
         $(this).removeClass('visible').dequeue();
      });

      $(caseStudyText).delay(0).queue(function(){
        $(this).removeClass('active').dequeue();
      });
      $(caseStudyText).delay(300).queue(function(){
        $(this).height(0).dequeue();
      });
      $(caseStudyImage).delay(500).queue(function(){
        $(this).removeClass('active').dequeue();
      });
    });

  });

  $('.single-item').slick();

});















