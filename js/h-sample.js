$(function () {

  // 급여제공기록지-주간달력
  const dateclick = new Swiper(".dateclick", {
  });

  // 급여제공기록지-앵커포인트 버튼
  $(window).scroll(function () {
    let scrollBox = $(document).scrollTop();
    console.log(scrollBox);
  });
  $(".service-wrap .serviceclick ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser01").offset().top - 30) {
      $(".serviceclick .service01").addClass("active");
      $(".serviceclick .service01").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: 0 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser02").offset().top - 30) {
      $(".serviceclick .service02").addClass("active");
      $(".serviceclick .service02").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -192 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser03").offset().top - 30) {
      $(".serviceclick .service03").addClass("active");
      $(".serviceclick .service03").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -440 });
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $("#ser-main .ser04").offset().top - 30) {
      $(".serviceclick .service04").addClass("active");
      $(".serviceclick .service04").siblings().removeClass("active");
      $(".serviceclick.mobile ul").css({ marginLeft: -500 });
    }
  });

  //급여제공-팝업달력
  $(".service-wrap .popup").hide();
  $(".service-wrap .datepicker-calendar").css({ marginBottom: -812 });
  $(".service-wrap .date").click(function () {
    $(".service-wrap .dimmed").show();
    $(".service-wrap .popup").show();
    $(".service-wrap .datepicker-calendar").animate({ marginBottom: 0 });
    $(".service-wrap .dimmed").css({ "background": "rgba(0, 0, 0, 0.5)" })
    $(".service-wrap").addClass("active")
  });
  $(".service-wrap .btn-modal-close").click(function () {
    $(".service-wrap .dimmed").hide();
    $(".service-wrap .popup").delay(300).fadeOut();
    $(".service-wrap .datepicker-calendar").animate({ marginBottom: -812 });
    $(".service-wrap .dimmed").animate({ "background": "rgba(0, 0, 0, 0)" })
    $(".service-wrap").removeClass("active")
  });


  // 로그아웃 클릭 시 배경과 팝업 보이기
  $(".mypage_01-wrap .log-out").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeIn();
    $(".mypage_01-wrap").addClass("active");
  });
  $(".mypage_01-wrap .logout-con .no").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeOut();
    $(".mypage_01-wrap").removeClass("active");
  });
  $(".mypage_01-wrap .logout-con .yes").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeOut();
    $(".mypage_01-wrap").removeClass("active");
  });
}); //삭제x