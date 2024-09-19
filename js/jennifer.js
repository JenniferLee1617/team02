$(function () {

    //login_02
    $(".login-wrap .select-list").hide();
    $(".login-wrap .selected").hide();
    $(".login-wrap .ex").hide();
    $(".login-wrap fieldset>div:nth-of-type(1)").click(function () {
        $(this).toggleClass("active");
        $(".login-wrap input").toggleClass("active")
        $(".login-wrap .select-list").toggle();
    });

    $(".login-wrap .select-list li:nth-of-type(1)").click(function () {
        $(".login-wrap .selected").show();
        $(".login-wrap .select-list").hide();
        $(".login-wrap fieldset>div:nth-of-type(1)").hide();
        $(".login-wrap .ex").show();
        $(".login-wrap .btn-next").addClass("active");
    });
    $(".login-wrap .selected").click(function () {
        $(".login-wrap fieldset>div:nth-of-type(1)").show();
        $(".login-wrap .select-list").show();
        $(this).hide();
        $(".login-wrap .ex").hide();
        $(".login-wrap .btn-next").removeClass("active");
    });

    //sub/bill_01
    $(".bills-wrap .dimmed").hide();
    // $(".bills-wrap .modal.filter").hide();
    $(".bills-wrap .modal.filter").css({ marginBottom: -510 });
    // $(".bills-wrap .modal.datepicker-calendar").hide();
    $(".bills-wrap .modal.datepicker-calendar").css({ marginBottom: -536 });
    $(".bills-wrap .btn-filter").click(function () {
        $(".bills-wrap .dimmed").show();
        $(".bills-wrap .modal.filter").animate({ marginBottom: 0 });
        $(".bills-wrap .dimmed").css({ "background": "rgba(0, 0, 0, 0.5)" })
    });
    $(".bills-wrap .modal.filter .filter-period li").click(function () {
        let idx = $(this).index();
        $(".bills-wrap #main .filter-period li").eq(idx).show().siblings().hide();
        $(this).find(".button").addClass("active");
        $(this).siblings().find(".button").removeClass("active");
    });
    $(".bills-wrap .select-date").hide();
    $(".bills-wrap .modal.filter .filter-period li:last-of-type").click(function () {
        $(".bills-wrap .select-date").show();
    });
    $(".bills-wrap .modal.filter .filter-period li:not(:last-of-type)").click(function () {
        $(".bills-wrap .select-date").hide();
    });
    $(".bills-wrap .select-date button").click(function () {
        $(".bills-wrap .datepicker-calendar").animate({ marginBottom: 0 });
    });
    $(".bills-wrap #main .filter-type").hide();
    $(".bills-wrap .modal.filter .filter-type li").click(function () {
        $(".bills-wrap #main .filter-type").show();
        $(".bills-wrap #main .all").hide();
        let idx = $(this).index();
        $(".bills-wrap #main .filter-type li").eq(idx).toggleClass("active");
        $(this).find(".button").toggleClass("active");
        $(".bills-wrap .payment-list li").eq(idx).toggleClass("active");
    });
    //만약 filter-type의 모든 li에 .active가 붙으면 '전체'로 보여지기
    $(".bills-wrap .modal.filter .filter-arrange li").click(function () {
        let idx = $(this).index();
        $(".bills-wrap #main .filter-arrange li").eq(idx).show().siblings().hide();
        $(this).find(".button").addClass("active");
        $(this).siblings().find(".button").removeClass("active");
    });
    $(".bills-wrap .filter-selected").click(function () {
        $(".bills-wrap .dimmed").fadeOut();
        $(".bills-wrap .modal.filter").animate({ marginBottom: -402 });
    });
    $(".bills-wrap .date-selected").click(function () {
        $(".bills-wrap .modal.datepicker-calendar").animate({ marginBottom: -536 });
    });

    //onBoarding
    const onBoarding = new Swiper(".onBoarding", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    $(".dontshow input").click(function () {
        $(this).toggleClass("active")
    });


    //splash

    $(".step02 div").css({ marginLeft: -400 });
    $(".img .content").css({ marginBottom: 0 });
    $(".img .openedCover").hide();
    // $(".img .cover").css({"transform": "rotate(0deg)"});
    $(".txt .step02").hide();
    $(".txt .step03").hide();
    $(".txt .step04").hide();

    $(".step01").delay(600).fadeOut(250);
    $(".txt .step02").delay(800).fadeIn(600);
    $(".txt .step02").delay(200).fadeOut(250);
    $(".txt .step03").delay(2000).fadeIn(600);
    $(".txt .step03").delay(200).fadeOut(250);
    $(".txt .step04").delay(3000).fadeIn(600);

    $(".img").delay(800).animate({ marginLeft: 0 }, 600);
    $(".img .heart").delay(2000).fadeOut(500);
    $(".img .cover").delay(3000).fadeOut(250);
    $(".img .openedCover").delay(3000).fadeIn(500);
    $(".img .content").delay(3000).animate({ marginBottom: 120 }, 500);
    // $(".img .cover").animate({"transform": "rotate(180deg)"});
    // $(".img .cover").animate({ transform: rotate(180) });

    // $(".img .cover").delay(2800).css({ "transform": "translateX(-50%) rotate(180deg)" });
    // $(".img .cover").delay(2800).addClass("rotate");
    // $(".img .cover").animate({ transform: rotate(180) });


});