jQuery(document).ready(function($){
  AOS.init();
  AOS.refresh();
  $('.footer__menu .footer__heading').click(function() {
  	$(this).parent('.footer__menu').toggleClass('active');
    $(this).next('ul').slideToggle();
  });
   $('.section-faq ul li').click(function() {
  	$(this).toggleClass('active');
  });
  
  /* Product Page */
  if($('.product_section_nutrition  .nutrition-title').length > 0 ) {
    $('.product_section_nutrition  .nutrition-title').click(function() {
      $(this).parent('.product-description-split').toggleClass('active');
      $(this).next('.description.content').slideToggle();
    });
  }
  var t = 0;
  var reviewPage = setInterval(function(){
    if($('.product_section_reviews .spr-reviews').length > 0 ) {
      $( ".spr-header .spr-summary-actions" ).insertAfter( $( ".spr-reviews" ) );
      //$( ".spr-pagination" ).insertAfter( $( ".spr-reviews" ) );
    }
    t += 1;
  	if(t == 3)
      clearInterval(reviewPage);
  }, 3000);

  reviewCarousel();

  $(window).resize(function(){reviewCarousel();});
  
  $('.newsletter-form').delegate("*", "focus blur", function() {
    var i = $(this),
        e = $(this).parent();
    setTimeout(function() {
      i.is(":focus") ? e.addClass("focused") : "" == i.val() && e.removeClass("focused")
    }, 0)
  })
  
  
  /* var reviewSlider = setInterval(function(){
    if($('.product_section_reviews .spr-reviews').length > 0 ) {
      $('.product_section_reviews .spr-reviews').addClass('owl-carousel');
      $('.product_section_reviews .spr-reviews').owlCarousel({
        loop:false,
        mouseDrag:false,
        touchDrag:false,
        margin:0,
        responsiveClass:true,
        autoplay:false,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          767:{
            items:1,
            nav:false
          },
          999:{
            items:2,
            nav:true,
            loop:false
          },
          1000:{
            items:3,
            nav:true,
            loop:false
          }
        }
      })
    }
  }, 3000);

  $('.spr-pagination .spr-pagination-page a').click(function() {
    $('.product_section_reviews .spr-reviews').trigger('refresh.owl.carousel');
    $('.spr-content .spr-pagination').remove();
    $( ".spr-pagination" ).insertAfter( $( ".spr-reviews" ) );
  });*/
  
  /* Product Page */
  
//   $('.section-faq ul li').click(function () {
//     if($(this).hasClass('active')){
//       $(this).toggleClass('active');
//     }else{
//       $('.section-faq ul li').removeClass('active');
//       $(this).addClass('active');
//     }
//   });
  

});

function reviewCarousel(){
  var check = false;
  var reviewSlider = setInterval(function(){
  	if($('.product_section_reviews .spr-reviews').length > 0 && $(window).width() <= 767) {
      $('.spr-pagination').insertAfter('.spr-reviews');
      var xx = $('.spr-pagination-page a').attr('onclick');
      xx += ';test(this)';
      $('.spr-pagination-page a').attr('onclick',xx);
      $('.product_section_reviews .spr-reviews').addClass('owl-carousel');
      $('.product_section_reviews .spr-reviews').owlCarousel({
        loop:false,
        mouseDrag:true,
        touchDrag:true,
        margin:0,
        responsiveClass:true,
        autoplay:false,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          767:{
            items:1,
            nav:false
          },
          999:{
            items:2,
            nav:true,
            loop:false
          },
          1000:{
            items:3,
            nav:true,
            loop:false
          }
        }
      });
      if($('.product_section_reviews .spr-reviews .spr-review').length > 0)
      	check = true;
    }
                 
    if(check) {
      clearInterval(reviewSlider);
    }
  },1000);
}

function test(e){
  console.log('sadasdasd');
  setTimeout(function(){
  	if($('.product_section_reviews .spr-reviews').length > 0 && $(window).width() <= 767) {
      $('.spr-pagination').insertAfter('.spr-reviews');
      var xx = $('.spr-pagination-page a').attr('onclick');
      xx += ';test(this)';
      $('.spr-pagination-page a').attr('onclick',xx);
      $('.product_section_reviews .spr-reviews').removeClass('clone');
      $('.product_section_reviews .spr-reviews').clone().addClass('clone').insertAfter('.spr-form');
      $('.product_section_reviews .spr-reviews').addClass('owl-carousel');
      $('.product_section_reviews .spr-reviews').owlCarousel({
        loop:false,
        mouseDrag:true,
        touchDrag:true,
        margin:0,
        responsiveClass:true,
        autoplay:false,
        responsive:{
          0:{
            items:1,
            nav:true
          },
          767:{
            items:1,
            nav:false
          },
          999:{
            items:2,
            nav:true,
            loop:false
          },
          1000:{
            items:3,
            nav:true,
            loop:false
          }
        }
      })
      $('.product_section_reviews .spr-reviews').not('.clone').remove();
    }
  },1000);
}