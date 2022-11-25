$(function() {

    $(".check .agree ,.check .mark12 ").click(function() {
        if ($(".check input").prop('checked') == true) {
            console.log("val 0");
            $(".check input").prop('checked', false);
        } else {
            console.log("val 1");
            $(".check input").prop('checked', true);
        }

    });
    $(".agree , .mark12").click(function() {
        $(this).parent(".check").toggleClass("active")
    });



    $("#writeChanceModal .conferm").click(function() {
        $("#writeChanceModal").removeClass("in");
        $("#writeChanceModal,.modal-backdrop").css("display", "none")
    });

    $("#conferm .signIn").click(function() {
        $("#conferm").removeClass("in")
        $(".modal-backdrop,#conferm").css("display", "none")


    });

    $(".closeX,.BgClose").click(function() {
        $(".openMenuMobile").removeClass("active");
        $("body,html").removeClass("overflowH");
        $(".menuMobile").fadeOut();
        $(".transformPage,.menuMobile .menuContent").removeClass("active");

    });
    $(".openMenuMobile").click(function() {
        $(this).toggleClass("active");

        setTimeout(function() {
            $("body,html").addClass("overflowH");
            $(".menuMobile").fadeIn();
            $(".transformPage,.menuMobile .menuContent").addClass("active");
        }, 500);
    });

    $(".menuMobile .menuContent .menuRes .linksHeader .meanlink").click(function() {

        $(this).next().slideToggle(500);





    });


    $('.the-slider-inner').bxSlider({
        useCSS: false,
        auto: true,
        controls: true,
        pager: true,
        dots: true,
        autoHover: true,
        responsive: true,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<i class="iconSlider"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8716,621l8,8-8,8" transform="translate(-8715.293 -620.293)" fill="none" stroke="#fff" stroke-width="2"/> </svg></i>',
        prevText: '<i class="iconSlider"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8724,621l-8,8,8,8" transform="translate(-8714.586 -620.293)" fill="none" stroke="#fff" stroke-width="2"/></svg></i>',

    });


    /****** Start Tabs ******/

    $(".tabsBtns li").click(function() {

        var myButton = $(this).attr("id"),
            parent = $(this).parent().attr("id");

        $(this).addClass("active").siblings().removeClass("active");

        $("." + parent + " .tab").hide();

        $("." + parent + " ." + myButton).fadeIn();

    });

    /****** End Tabs ******/
    var opportunity = $('#opportunity');
    var iconRight = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8716,621l8,8-8,8" transform="translate(-8715.293 -620.293)" fill="none"/> </svg></i > ',
        iconLeft = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8724,621l-8,8,8,8" transform="translate(-8715.293 -620.646)" fill="none"></svg></i > '
    opportunity.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        rtl: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }


        },
        navText: [iconRight, iconLeft]
    });

    var projects = $('#partners');
    var iconRight = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8716,621l8,8-8,8" transform="translate(-8715.293 -620.293)" fill="none"/> </svg></i > ',
        iconLeft = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="10.121" height="17.414" viewBox="0 0 10.121 17.414"> <path id="Path_3100" data-name="Path 3100" d="M8724,621l-8,8,8,8" transform="translate(-8715.293 -620.646)" fill="none"></svg></i > '
    projects.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        rtl: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }


        },
        navText: [iconRight, iconLeft]
    });
    var projects = $('#writeChance');
    var iconRight = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="6.121" height="9.414" viewBox="0 0 6.121 9.414"><path id="Path_2961" data-name="Path 2961" d="M1867-2603l4,4-4,4" transform="translate(-1866.293 2603.707)" fill="none" stroke="#fff" stroke-width="2"/> </svg></i > ',
        iconLeft = '<i class="iconRight"><svg xmlns="http://www.w3.org/2000/svg" width="6.121" height="9.414" viewBox="0 0 6.121 9.414"> <path id="Path_2961" data-name="Path 2961" d="M1871-2603l-4,4,4,4" transform="translate(-1865.586 2603.707)" fill="none" stroke="#fff" stroke-width="2"/> </svg></i > '
    projects.owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        rtl: true,
        margin: 5,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            1000: {
                items: 4
            }


        },
        navText: [iconRight, iconLeft]
    });

    /****** Start  countTo ******/

    $('.Evaluation').one('inview', function(event, visible) {

        if (visible === true) {
            /****** Start  countTo******/
            $('.numberBox , strong').countTo();
            /****** End  countTo******/
        }

    });

    /****** End  countTo ******/


    $('.flex-box input[type="file"]').wrap('<div class="costom-fill"></div>');

    $('.costom-fill').append('<i><svg xmlns="http://www.w3.org/2000/svg" width="17.528" height="19.582" viewBox="0 0 17.528 19.582"> <g id="user_2_" data-name="user (2)" transform="translate(-24.165)"> <g id="Group_1140" data-name="Group 1140" transform="translate(24.165)"> <g id="Group_1139" data-name="Group 1139"> <path id="Path_77" data-name="Path 77" d="M115.876,10.168a5.084,5.084,0,1,0-5.084-5.084A5.1,5.1,0,0,0,115.876,10.168Z" transform="translate(-107.111)" fill="#fff"/> <path id="Path_78" data-name="Path 78" d="M41.656,251.54a4.74,4.74,0,0,0-.511-.932,6.32,6.32,0,0,0-4.374-2.753.936.936,0,0,0-.644.155,5.419,5.419,0,0,1-6.394,0,.833.833,0,0,0-.644-.155,6.274,6.274,0,0,0-4.374,2.753,5.464,5.464,0,0,0-.511.932.472.472,0,0,0,.022.422,8.858,8.858,0,0,0,.6.888A8.436,8.436,0,0,0,25.848,254a13.3,13.3,0,0,0,1.021.888,10.125,10.125,0,0,0,12.078,0A9.76,9.76,0,0,0,39.968,254a10.251,10.251,0,0,0,1.021-1.154,7.784,7.784,0,0,0,.6-.888A.379.379,0,0,0,41.656,251.54Z" transform="translate(-24.165 -237.308)" fill="#fff"/> </g> </g> </g> </svg></i>');

    $('.our-form form input[type="file"]').change(function() {
        $(this).prev('span').text($(this).val());

    });

    $(".callUs .boxF ").click(function() {
        $(this).siblings(".whatsApp").toggleClass("active")


    });

    var charLimit = 1;
    $(".inputNumb input").keyup(function(e) {

        var keys = [8, 9, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145];

        if (e.which == 8 && this.value.length == 0) {
            $(this).prev('.inputNumb input').focus();
        } else if ($.inArray(e.which, keys) >= 0) {
            return true;
        } else if (this.value.length >= charLimit) {
            $(this).next('.inputNumb input').focus();
            return false;
        }
    }).keyup(function() {
        if (this.value.length >= charLimit) {
            $(this).next('.inputNumb input').focus();
            return false;
        }
    });


    $(".inputNumb input").keyup(function() {
        if ($(this).val().length > 0) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });


    if ($('.numbs #Timer').length) {

        var timeLeft = 30;
        var elem = document.getElementById('Timer');

        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
            } else {
                elem.innerHTML = timeLeft < 10 ? "0" + timeLeft : timeLeft;
                timeLeft--;
            }
        }

    }






});