jQuery.extend(jQuery.easing,{
    easeInOutExpo: function(x, t, b, c, d){
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

$(document).ready(function () {

    $('a[href=\\#]').click(function (e) {
        e.preventDefault();
        $('nav').removeClass('visible');
        $('html,body').stop().animate({ scrollTop: $('.' + $(this).data('scrollto')).offset().top - 65 }, 700, 'easeInOutExpo', function () { });
    });

    $('.toggle-menu').click(function () {
        $('nav').toggleClass('visible');
    });

    if ($(window).width() < 800) {
        $('.pricing > div > div:nth-of-type(3)').insertAfter($('.pricing > div > div:nth-of-type(1)'));
    }

    $(document).ready(function () {
        if (window.location.href.includes('#splash')) {
            $(document).ready(function () {
                if (window.location.href.includes('#splash')) {
                    let animationTime = 50;

                    $('html, body').animate({
                        scrollTop: $('.splash').offset().top
                    }, animationTime);
                }
            });
        }
       
    $(document).ready(function () {
        if (window.location.href.includes('#overview')) {
            $(document).ready(function () {
                if (window.location.href.includes('#overview')) {
                    let animationTime = 50;

                    $('html, body').animate({
                        scrollTop: $('.overview').offset().top
                    }, animationTime);
                }
            });
        }

        if (window.location.href.includes('#cta')) {
            $(document).ready(function () {
                if (window.location.href.includes('#cta')) {
                    let animationTime = 500;
                    $('html, body').animate({
                        scrollTop: $('.cta').offset().top
                    }, animationTime);
                }
            });
        }

        if (window.location.href.includes('#values')) {
            $(document).ready(function () {
                if (window.location.href.includes('#values')) {
                    let animationTime = 500;
                    $('html, body').animate({
                        scrollTop: $('.values').offset().top
                    }, animationTime);
                }
            });
        }

        if (window.location.href.includes('#projects')) {
            $(document).ready(function () {
                if (window.location.href.includes('#projects')) {
                    let animationTime = 500;
                    $('html, body').animate({
                        scrollTop: $('.projects').offset().top
                    }, animationTime);
                }
            });
        }

        if (window.location.href.includes('#references')) {
            $(document).ready(function () {
                if (window.location.href.includes('#references')) {
                    let animationTime = 500;
                    $('html, body').animate({
                        scrollTop: $('.references').offset().top
                    }, animationTime);
                }
            });
        }

        if (window.location.href.includes('#contact')) {

            $(document).ready(function () {
                if (window.location.href.includes('#contact')) {
                    let animationTime = 500;

                    $('html, body').animate({
                        scrollTop: $('.contact').offset().top
                    }, animationTime);
                }
            });

        }
    });

});
    //end scroll to anchors when accessing site though # in link


    // When the user scrolls the page, execute progress bar
    window.onscroll = function () { myFunction() };

    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    // end execute progress bar

    // start add transparency upon scroll
    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 10) {
                $(".header").addClass("active");
            }

            else {
                $(".header").removeClass("active");
            }
        });
    });
    // end add transparency upon scroll

  

//cookies configuration
            glowCookies.start('en', { 
            policyLink: 'https://lennartfuchs.com/cookies.html', 
            hideAfterClick: true,
            position: 'right',
            acceptBtnBackground: '#05386b',
            bannerBackground: '#dcdcdc',
            bannerHeading: '<h2>Suprise! Cookies!</h2>',
            bannerDescription: 'This website may use cookies. Cookies on this website always contribute to the core functionality of the site. No trackers or ads use cookies on this site.',
            });
 // end cookies configuration


    //start projects image replacer
    $(function () {
        //matches css3 media query
        const mid = window.matchMedia('(max-width: 1400px)');
        const small = window.matchMedia('(max-width: 900px)');

            if (mid.matches) { //pixels at which element comes into screen depending on screen size
                var px1 = 3800;
                var px2 = 4200;
                var px3 = 4450;
                var px4 = 4750;
            }

            else if (small.matches) {
                var px1 = 2000;
                var px2 = 3200;
                var px3 = 4300;
                var px4 = 5400;
            }

            else {
                var px1 = 4450;
                var px2 = 4850;
                var px3 = 5150;
                var px4 = 5500;
            }

                        //if page ist scrolled to certain location (in px) change source of .image-projects and add new style to image and text field
                        //else remove style from text fied (grey highlight)
            $(window).on("scroll", function () {
                if ($(window).scrollTop() > px1 && $(window).scrollTop() < px2) {
                    $(".image-projects").attr('src', 'images/report.jpg');
                    $(".image-projects").attr('style', 'top: 200px;');
                    $(".p1").attr('style', 'background-color:#dcdcdc;');
                }
                else {
                    $(".p1").attr('style', 'background-color:#transparent;');
                }
                if ($(window).scrollTop() > px2 && $(window).scrollTop() < px3) {
                    $(".image-projects").attr('src', 'images/vlog_tv.jpg');
                    $(".image-projects").attr('style', 'top: 300px;');
                    $(".p2").attr('style', 'background-color:#dcdcdc;');
                }
                else {
                    $(".p2").attr('style', 'background-color:#transparent;');
                }
                if ($(window).scrollTop() > px3 && $(window).scrollTop() < px4) {
                    $(".image-projects").attr('src', 'images/website.jpg');
                    $(".image-projects").attr('style', 'top: 550px;');
                    $(".p3").attr('style', 'background-color:#dcdcdc;');
                }
                else {
                    $(".p3").attr('style', 'background-color:#transparent;');
                }
            });
    });

 // email form

    var form = $('#form'),
        email = $('#email'),
        name = $('#name'),
        message = $('#message'),
        info = $('#info'),
        submit = $("#submit");

    form.on('input', '#email, #name, #message', function () {
        $(this).css('border-color', '');
        info.html('').slideUp();
    });

    submit.on('click', function (e) {
        info.html('<br/><br/><b>Loading...</b>').css('color', 'orange').slideDown();
        e.preventDefault();
        if (validate()) {
            $.ajax({
                type: "POST",
                url: "mailer.php",
                data: form.serialize(),
                dataType: "json"
            }).done(function (data) {
                if (data.success) {
                    email.val('');
                    name.val('');
                    message.val('');
                    info.html('<br/><br/><b>Message sent!</b>').css('color', 'green').slideDown();
                }
            });
        } else {
            info.html('<br/><br/><b>Please enter your name, message, and a correct email address.</b>').css('color', '#05386b').slideDown();
        }
    });

    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email.val())) {
            email.css('border-color', 'red');
            valid = false;
        }
        if ($.trim(name.val()) === "") {
            name.css('border-color', 'red');
            valid = false;
        }
        if ($.trim(message.val()) === "") {
            message.css('border-color', 'red');
            valid = false;
        }

        return valid;
    }

});

 //end email form