$(document).ready(function(){
  if ($(window).width() < 768) {
    $(".topNav").removeClass("topNavLeft", "topNavRight");
    $(".navBar").addClass("navClose");
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
      $(".topNav").toggleClass("responsive");
      $(".navBar").toggleClass("navOpen", "navClose");
    });
  };
});

$(".navLink").click(function() {
  // $(".navBar").removeClass("navClose");
  // $(".navBar").removeClass("navOpen");
  // $(this).addClass("navClicked");
  $(".topNav").toggleClass("responsive");
  $(".burger-1, .burger-2, .burger-3").toggleClass("open");
  $(".navBar").toggleClass("navOpen", "navClose");
})
