(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            mainmenu
        ----------------------------------------------------*/
        $('.mainmenu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '1199',
        });

        $(".sidebar-toggle-btn").on("click", function () {
            $(".sidebar-wrap").addClass("sidebar-opened");
//            $(".body-overlay").addClass("opened");
        });
        $(".sidebar-close-btn").on("click", function () {
            $(".sidebar-wrap").removeClass("sidebar-opened");
//            $(".body-overlay").removeClass("opened");
        });
        /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
        $('.course-carousel').owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        /*---------------------------------------------------
            testimonial carousel
        ----------------------------------------------------*/
        $('.testi-carousel').owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        /*---------------------------------------------------
            counter
        ----------------------------------------------------*/
        $('.counter-single span').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });

        /*---------------------------------------------------
                magnific popUp
        ----------------------------------------------------*/
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 300
        });

        /*---------------------------------------------------
                countdown
        ----------------------------------------------------*/
        $('#countdown').syotimer({
            year: 2023,
            month: 12,
            day: 11,
            hour: 20,
            minute: 30,
        });

    });

    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    /*---------------------------------------------------
        accordian
    ----------------------------------------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));


// vc - navigation links indicator
const activePage = window.location;
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
});

// popup event
document.querySelector(".vote-btn1").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});
document.querySelector(".vote-btn2").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});
document.querySelector(".vote-btn3").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});
document.querySelector(".vote-btn4").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});
document.querySelector(".vote-btn5").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});
document.querySelector(".vote-btn6").addEventListener("click", () => {
    setTimeout((event) => {
        document.querySelector("#popup-area").style.display = "block";
    }, 500);
});

// popup close on button click
document.querySelector("#close").addEventListener("click", () => {
    document.querySelector("#popup-area").style.display = "none";
});


document.getElementById('numOfVotes').innerText = 0;
document.getElementById('votePrice').innerText = '# 0.00';

document.querySelector('.process input').addEventListener('keydown', (e) => {
    let numOfVotes;
    if (e.key === 'Enter') {
        // console.log(e.target.value);
        document.getElementById('numOfVotes').innerText = e.target.value;
        document.getElementById('votePrice').innerText = '# ' + e.target.value * 1000;
    }

    document.querySelector('.voteNumBtn').addEventListener('click', () => {
        document.getElementById('numOfVotes').innerText = e.target.value;
        document.getElementById('votePrice').innerText = '# ' + e.target.value * 1000;
    });
});
