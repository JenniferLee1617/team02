$(document).ready(function(){
 
  /* reservation01-wrap */
  $(".reservation01-wrap .btn-list li:nth-child(1)").click(function(){
    $(".reservation01-wrap .dimmed-01").fadeIn();
  });
  $(".reservation01-wrap .m-close").click(function(){
    $(".reservation01-wrap .dimmed-01").hide();
  });

  $(".reservation01-wrap .btn-list li:nth-child(2)").click(function(){
    $(".reservation01-wrap .dimmed-02").fadeIn();
  });
  $(".reservation01-wrap .m-close").click(function(){
    $(".reservation01-wrap .dimmed-02").hide();
  });

  /* reservation02-wrap */
  $(".reservation02-wrap .detail").click(function(){
    $(".reservation02-wrap .dimmed").fadeIn();
  });
  $(".reservation02-wrap .btn li:nth-child(2)").click(function(){
    $(".reservation02-wrap .dimmed").hide();
  });

   /* reservation03-wrap */
   $(".reservation03-wrap .detail").click(function(){
    $(".reservation03-wrap .dimmed").fadeIn();
  });
  $(".reservation03-wrap .btn li:nth-child(2)").click(function(){
    $(".reservation03-wrap .dimmed").hide();
  });

  /* reservation05-wrap */
  /* date */
  $(".reservation05-wrap .datepicker").click(function(){
    $(".reservation05-wrap .dimmed, .reservation05-wrap .datepicker-calendar").fadeIn();
    $(".reservation05-wrap .modal-timepicker").hide();
    $(".reservation05-wrap .modal-submit").hide();
    $(".reservation05-wrap .modal-complete-phone").hide();
  });
 $(".reservation05-wrap .circle").click(function(){
  $(this).addClass("active");
 });
 $(".reservation05-wrap .circle").click(function(){
  $(this).addClass("active");
 });

 $(".reservation05-wrap .blue").click(function(){
  $(".reservation05-wrap .back").show();
 });
 
 $(".reservation05-wrap .btn-modal-close").click(function(){
  $(".reservation05-wrap .dimmed").hide();
 });

 /* time */
 $(".reservation05-wrap .timepicker").click(function(){
  $(".reservation05-wrap .dimmed, .reservation05-wrap .modal-timepicker").fadeIn();
  $(".reservation05-wrap .modal-submit").hide();
  $(".reservation05-wrap .datepicker-calendar").hide();
  $(".reservation05-wrap .modal-complete-phone").hide();
 });
 $(".reservation05-wrap .m-btn button").click(function(){
  $(".reservation05-wrap .dimmed, .reservation05-wrap .modal-timepicker").hide();
 });
$(".reservation05-wrap .sq").click(function(){
  $(this).addClass("choice");
});
 $(".reservation05-wrap .m-close").click(function(){
  $(".reservation05-wrap .dimmed").hide();
 });

// ----------------- 모달 팝업창!!!! 질문!!!! ------------------
 $(".reservation05-wrap .btn").click(function(){
  $(".reservation05-wrap .modal-submit").show();
 });

 $(".reservation05-wrap .btn").click(function(){
  $(".reservation05-wrap .dimmed-submit").fadeIn();
 });

 $(".reservation05-wrap .next").click(function(){
  $(".reservation05-wrap .dimmed-complete").show();
 });
});