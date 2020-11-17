$(document).ready(function(){
    $('.pss-content .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false
            },
            1200:{
                items:4
            }
        }
    })



     // On Click Scroll to next section
     $('.scrollDiv').on('click', function () {
        var ele = $('.scrollSection');
        // this will search within the section
        $("html, body").animate({
             scrollTop: $(ele).offset().top
        }, 1000);
        return false;
    });
});