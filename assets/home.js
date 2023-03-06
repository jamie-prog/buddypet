jQuery(document).ready(function($) {
  $('#header .header__right a').mouseenter(function () {
      $('#header .submenu-wrapper').addClass('hidden');
      $('#header .submenu').addClass('hidden');
      $('#header .main-menu .item').removeClass('active');
      $('#header').removeClass('bkg-white');
  })
  $('#header .main-menu .item').mouseenter(function () {
      $('#header .submenu-wrapper').addClass('hidden');
      $('#header .submenu').addClass('hidden');
      $('#header .main-menu .item').removeClass('active');
      $('#header').removeClass('bkg-white');
      if ($('#header .submenu[index="'+$(this).attr('index')+'"]').length) {
          $('#header').addClass('bkg-white');
          $('#header .submenu-wrapper').removeClass('hidden');
          $('#header .submenu[index="'+$(this).attr('index')+'"]').removeClass('hidden');
          $(this).addClass('active');
      }
  })
  $('#header').mouseleave(function () {
      $('#header .submenu-wrapper').addClass('hidden');
      $('#header .submenu').addClass('hidden');
      $('#header .main-menu .item').removeClass('active');
      $('#header').removeClass('bkg-white');
  })
  if ($('body.index').length) {
    var our_product_carousel = [];
    $(".collection-filter").on('click', function(){
        let targetCarouselAttr = $(this).attr("data-target-carousel");
        let $targetCarousel = $(`.featured-products__carousel[data-carousel="${targetCarouselAttr}"]`); 
        if(!$(this).hasClass("is-active")){
            $(".collection-filter.is-active").removeClass("is-active");
            $(this).addClass("is-active");
            $(".featured-products__carousel.is-active").removeClass("is-active"); 
            $targetCarousel.addClass("is-active");
        }
    })
    // $('.our-product .navigation .collection-filter').click(function () {
    //     var index = $(this).attr('index');
    //     $('.our-product .navigation .collection-filter').removeClass('is-active');
    //     $(this).addClass('is-active');
    //     $('.our-product .owl-carousel').hide();
    //     $('.our-product .slider-'+index).show();
    //     $('.our-product .owl-dots').hide();
    //     $('.our-product .dots-'+index).show();
    //     $('.product-items .item-product .info .product-useful').matchHeight();
    //     return false;
    // });


    // Script for home-our-products collection. 

    $('.our-product .owl-carousel').each(function(index) {
        $(this).owlCarousel({
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"> <g data-name="Slider Arrow" transform="translate(1939 1522) rotate(180)"> <path data-name="Path 264" d="M20.891,20.891H0V0" transform="translate(1896.566 1498.772) rotate(-135)" fill="none" stroke="#878076" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <g transform="translate(1863 1446)" fill="none" stroke="#878076" stroke-width="1"> <circle cx="38" cy="38" r="38" stroke="none"/> <circle cx="38" cy="38" r="37.5" fill="none"/> </g> </g> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"> <g data-name="Slider Arrow" transform="translate(-1863 -1446)"> <path data-name="Path 264" d="M20.891,20.891H0V0" transform="translate(1896.566 1498.772) rotate(-135)" fill="none" stroke="#878076" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <g transform="translate(1863 1446)" fill="none" stroke="#878076" stroke-width="1"> <circle cx="38" cy="38" r="38" stroke="none"/> <circle cx="38" cy="38" r="37.5" fill="none"/> </g> </g> </svg>'],
            dots: true,
            center: false,
            items: 3,
            // dotsContainer: '.our-product .custom-dots .dots-'+(index+1),
            // onInitialized: itemMatchHeight,
            responsive: {
                0: {
                    loop: true,
                    items: 1,
                    margin: 10
                },
                767: {
                    nav: true,
                    loop: false,
                    items: 2,
                    margin: 10
                },
                992: {
                    nav: true,
                    loop: false,
                    items: 3,
                    margin: 20
                }
            }
        });
    })
    function itemMatchHeight(e) {
      let carousel = e.target; 
      carousel.find(".product-info").matchHeight();
    }
  }

  $(".home-featured-blog.list-blog").owlCarousel({
    items: 3,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"> <g data-name="Slider Arrow" transform="translate(1939 1522) rotate(180)"> <path data-name="Path 264" d="M20.891,20.891H0V0" transform="translate(1896.566 1498.772) rotate(-135)" fill="none" stroke="#878076" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <g transform="translate(1863 1446)" fill="none" stroke="#878076" stroke-width="1"> <circle cx="38" cy="38" r="38" stroke="none"/> <circle cx="38" cy="38" r="37.5" fill="none"/> </g> </g> </svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76"> <g data-name="Slider Arrow" transform="translate(-1863 -1446)"> <path data-name="Path 264" d="M20.891,20.891H0V0" transform="translate(1896.566 1498.772) rotate(-135)" fill="none" stroke="#878076" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/> <g transform="translate(1863 1446)" fill="none" stroke="#878076" stroke-width="1"> <circle cx="38" cy="38" r="38" stroke="none"/> <circle cx="38" cy="38" r="37.5" fill="none"/> </g> </g> </svg>'],
    center: false,
    margin: 25,
    nav: true,
    responsive: {
        0: {
            loop: true,
            items: 1,
            margin: 10,
            nav: false,
            center: false
        },
        767: {
            nav: true,
            loop: false,
            items: 2,
            margin: 10
        },
        992: {
            nav: true,
            loop: false,
            items: 3,
            margin: 20
        }
    }
  })
})