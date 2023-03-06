jQuery(window).ready(function() {
	// functions
	function reviewsProductDetail(){
		if(jQuery(".jdgm-rev-widg__summary").length > 0){
			var htmlReview = jQuery('.jdgm-rev-widg__summary').html();
			jQuery(".number-rating").html(htmlReview);
			var textReview = jQuery(".product-content-mid .number-rating.rating-desktop-show .jdgm-rev-widg__summary-text").text().replace(/Based on /gi, "");
			jQuery(".jdgm-rev-widg__summary-text").text(textReview);
		}
	}
	function focusOutFormWriteReview(){
		jQuery(".jdgm-widget-actions-wrapper a").on("click",function(){
			jQuery('.product-page .jdgm-widget input[name="reviewer_name"]').blur();
		});
	}
   	if(jQuery("body.product").length > 0){
   		reviewsProductDetail();
   		focusOutFormWriteReview();

   	}
})