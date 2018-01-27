var arrows = document.getElementsByClassName('arrows');

var pattern = document.querySelector('.pattern')
var pattern1 = document.querySelector('.pattern1')
var pattern2 = document.querySelector('.pattern2')
var pattern3 = document.querySelector('.pattern3')
var pattern4 = document.querySelector('.pattern4')
var pattern5 = document.querySelector('.pattern5')
var color1 = document.querySelector('.color1')
var h1 = document.querySelector('.spotsH1')
var card = document.querySelector('.card')

document.body.setAttribute("class", "noscroll");

document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";



window.onload = function() {




    setTimeout(function() {
        document.getElementById("spinner").style.display = "none";
        document.getElementById("overlay").style.display = "none";

        document.body.className = document.body.className.replace(/\bnoscroll\b/, '');

        h1.className += " visibleh1";

        card.className += " visiblecard";

        setTimeout(function() {
            pattern1.style.opacity = "1";
        }, 800)


    }, 500)
};


var slider = tns({

    "items": 1,
    "mode": "gallery",
    "controlsContainer": ".controls",
    "animateIn": "bounceInDown",
    "animateOut": "fadeOutDown",
    "speed": 1000,
    "animateDelay": 2000
});



for (var i = 0; i < arrows.length; i++) {

    arrows[i].onclick = function() {
        // console.log("test")

        setTimeout(function() {
            var active = document.querySelector('.tns-slide-active')

            console.log(active.attributes["data-fact"].value);

            function seeThrough() {
                pattern1.style.opacity = "0";
                pattern2.style.opacity = "0";
                pattern3.style.opacity = "0";
                pattern4.style.opacity = "0";
                pattern5.style.opacity = "0";
            }

            switch (active.attributes["data-fact"].value) {
                case "1":
                    seeThrough();
                    pattern1.style.opacity = "1";
                    color1.style.backgroundColor = "#9a57a3";


                    break;
                case "2":
                    seeThrough();
                    pattern2.style.opacity = "1";
                    color1.style.backgroundColor = "#f6a200";

                    break;
                case "3":
                    seeThrough();
                    pattern3.style.opacity = "1";
                    color1.style.backgroundColor = "#f3d60e";

                    break;
                case "4":
                    seeThrough();
                    pattern4.style.opacity = "1";
                    color1.style.backgroundColor = "#772b90";

                    break;
                case "5":
                    seeThrough();
                    pattern5.style.opacity = "1";
                    color1.style.backgroundColor = "#60bfb6";
                    break;
            }

        }, 20)

    }
};

$(function() {
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.bg').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();


    init();
    new WOW().init();
    $(window).scroll(function() {
        init();
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    function init() {
        var secondFeature = $('#game').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.sticky-navigation').css({ "background-color": '#d81b60' });
        } else {
            $('.sticky-navigation').css({ "background-color": 'transparent' });
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({ 'background-position': 'center top' });
        }
        return false;
    }
});