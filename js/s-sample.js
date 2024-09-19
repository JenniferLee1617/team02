$(document).ready(function () {
  /* reservation01-wrap */
  $(".reservation01-wrap .btn-list li:nth-child(1)").click(function () {
    $(".reservation01-wrap .dimmed-01").fadeIn();
  });
  $(".reservation01-wrap .m-close").click(function () {
    $(".reservation01-wrap .dimmed-01").hide();
  });

  $(".reservation01-wrap .btn-list li:nth-child(2)").click(function () {
    $(".reservation01-wrap .dimmed-02").fadeIn();
  });
  $(".reservation01-wrap .m-close").click(function () {
    $(".reservation01-wrap .dimmed-02").hide();
  });

  /* reservation02-wrap */
  $(".reservation02-wrap li:nth-of-type(4) .detail").click(function () {
    $(".reservation02-wrap .dimmed").fadeIn();
  });
  $(".reservation02-wrap .btn li:nth-child(2)").click(function () {
    $(".reservation02-wrap .dimmed").hide();
  });

  /* reservation03-wrap */
  $(".reservation03-wrap li:nth-of-type(4) .detail").click(function () {
    $(".reservation03-wrap .dimmed").fadeIn();
  });
  $(".reservation03-wrap .btn li:nth-child(2)").click(function () {
    $(".reservation03-wrap .dimmed").hide();
  });
  /* reservation05-wrap */
  /* date */
  $(".form-wrap .dimmed").hide();
  $(".form-wrap .datepicker-calendar").css({ marginBottom: -812 });
  $(".form-wrap .input.date").click(function () {
    $(".form-wrap .datepicker-calendar").animate({ marginBottom: 0 });
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  $(".form-wrap .btn-modal-close.date-selected").click(function () {
    $(".form-wrap .datepicker-calendar").animate({ marginBottom: -812 });
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  $(".form-wrap .timepicker").css({ marginBottom: -812 });
  $(".form-wrap .input.time").click(function () {
    $(".form-wrap .timepicker").animate({ marginBottom: 0 });
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });

  $(".form-wrap .btn-modal-close.date-selected").click(function () {
    $(".form-wrap .timepicker").animate({ marginBottom: -812 });
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  $(".form-wrap .btn").click(function () {
    $(".form-wrap .submit").fadeIn();
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  $(".form-wrap .submit .no").click(function () {
    $(".form-wrap .submit").fadeOut();
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });
  $(".form-wrap .submit .yes").click(function () {
    $(".form-wrap .submit").hide();
    $(".form-wrap .submit-complete").fadeIn();
    $(".form-wrap .dimmed").show();
    $(".form-wrap").addClass("hidden");
  });
  $(".form-wrap .submit-complete .no").click(function () {
    $(".form-wrap .submit-complete").fadeOut();
    $(".form-wrap .dimmed").hide();
    $(".form-wrap").removeClass("hidden");
  });


  /* time */


});