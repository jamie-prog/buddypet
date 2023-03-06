"use strict";

/*Shopify.theme.jsOurProducts = {
  init: function init($section) {
    // Selectors
    var $prevButton = $section.find('.our-products__nav--prev');
    var $nextButton = $section.find('.our-products__nav--next');
    var $promoSlider = $section.find('[data-our-products-slider]');
    var $featuredPromosSlider = $promoSlider.flickity({
      initialIndex: 1,
      contain: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      imagesLoaded: true,
      draggable: true,
      on: {
        ready: function ready() {
          // Reset layout to avoid collapsing issues
          setTimeout(function () {
            $featuredPromosSlider.flickity('resize');
          }, 500);
        }
      }
    });
    $prevButton.on('click', function () {
      $featuredPromosSlider.flickity('previous');
    });
    $nextButton.on('click', function () {
      $featuredPromosSlider.flickity('next');
    });
  },
  blockSelect: function blockSelect($section, blockId) {
    var $featuredPromosSlider = $section.find('[data-our-products-slider]');
    var slideIndex = $('#shopify-section-' + blockId).data('promo-index');
    $featuredPromosSlider.flickity('select', slideIndex, true, true);
  },
  unload: function unload($section) {
    var $slider = $section.find('.flickity-enabled');
    $slider.flickity('destroy');
    $('.our-products__nav--prev').off();
    $('.our-products__nav--next').off();
  }
};*/

jQuery(document).ready(function($){
  $('.our-products__wrapper').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    nav: true,
    dots: false,
    responsive:{
      0:{
        items:1
      },
      767:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
  $('.our-products__wrapper .image__container').matchHeight();
  $('.our-products__wrapper .product-useful').matchHeight();

});