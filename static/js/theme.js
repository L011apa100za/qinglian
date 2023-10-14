(function($) {
    'use strict';

    $(document).ready(function(){ 
// sticky menu===================
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll <100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });
});

// Mobile Menu
$('.mobile-menu nav').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    onePage: false,
});

	
	
	// Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
	
// to wow Jquery
    new WOW().init();


// Loder  
    $(function () {
      $('body').addClass('loaded');
    });  




 // slider Active
    $('.blog_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    }) 



 // slider Active
    $('.testi_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    }) 


// slider Active
    $('.service_lists').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })


// slider Active
    $('.testimonial').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        dotsEach:true,
        nav: false,
        navText: ["<i class='fa fa-angle-left''></i>", "<i class='fa fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    }) 

 

// Skills Bars
$('.skill-percent').each(function(){
  $(this).animate({
    width:$(this).attr('data-percent')},"fast");
});

// scroll strat============================

$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $('.go-top').addClass('active');
    if (scrolled < 300) $('.go-top').removeClass('active');
});

$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 1200);
});


(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);



$(document).ready(function(){

    $('.aa').counterUp({
        delay: 10,
        time: 1000
    });


});

    

    
	/*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);




