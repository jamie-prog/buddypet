$(".reviews-testimonial").owlCarousel({
    margin: 16, 
    nav: false,
    center: false, 
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        }, 
        1200: {
            items: 3
        }, 
        1440: {
            items: 5
        }
    }
})