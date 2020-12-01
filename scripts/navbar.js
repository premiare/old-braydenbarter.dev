$(document).ready(function() {

  $(window).scroll(function() {
    $topOffset = $(this).scrollTop();
    console.log($topOffset);
    // console.log("scroll");

    if ($(window).scrollTop() < 1000) {
      $(".topNav").removeClass("topNavLeft");
      $(".topNav").addClass("topNavRight");
    } else {
      $(".topNav").addClass("topNavRight");
    };

  });
});
