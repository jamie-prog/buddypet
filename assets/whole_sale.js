jQuery(document).ready(function($){
  if($('.page-wholesale .page__content .one-whole.column p strong').length>0){
    $('.page-wholesale .page__content .one-whole.column p strong').parent().addClass('strong');
  }
   if($(window).width()>767){
    $('.page-wholesale .grid-item.media-up-one--half.adress').hide();
     }
});