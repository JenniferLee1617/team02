$(function () {

  $(".main-wrap .btn-ham").click(function () {
    $(".main-wrap .ham-list").fadeIn();
  });
  $(".main-wrap .btn-clear").click(function () {
    $(".main-wrap .ham-list").fadeOut();
  });


  $(".main-wrap .btn-alram").click(function () {
    $(".main-wrap .alram").fadeIn();
  });
  $(".main-wrap .alram .clear").click(function () {
    $(".main-wrap .alram").fadeOut();
  });

  $(".main-wrap .btn-more").click(function () {
    $(".main-wrap .cancle-bg, .main-wrap .cancle-con").fadeIn();
  });
  $(".main-wrap .no, .main-wrap .yes").click(function () {
    $(".main-wrap .cancle-bg, .main-wrap .cancle-con").fadeOut();
  });

  $(".mypage_01-wrap .log-out").click(function () {
    $(".mypage_01-wrap .logout-bg, .mypage_01-wrap .logout-con").fadeIn();
  });


  //공지 스와이퍼
  const notice = new Swiper(".notice-txt", {
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });
  
  //전체메뉴 공지 스와이퍼
  const hamnotice = new Swiper(".h-notice", {
    direction: "vertical",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });


}); //삭제x

