if (!sessionStorage.isVisited) {
  sessionStorage.isVisited = 'true';
  setTimeout(logo, 150)
  setTimeout(introDiv, 2000)
  setTimeout(displayNone, 2500)
  setTimeout(bigLogo, 2000)


  function logo() {
    $(".loadWheel").addClass("fadeIn");
  }

  function introDiv() {
    // console.log("test");
    $(".intro").addClass("fadeOut");
  };

  function displayNone() {
    $(".intro").addClass("displayNone");
  }

  function bigLogo() {
    $(".centerImage").addClass("fadeIn");
  }
} else {
  $(".loadWheel").hide();
  $(".intro").hide();
  $(".centerImage").removeClass("fadeIn");
}


$('.navBar a, .nameP a, .contactP a').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      }, 500);
  }
});

// NAV BAR
$(".topNav li a").click(function() {
  $(".topNav li a").removeClass("navClicked");
  $(this).addClass("navClicked");
  $(this).css("transition", ".5s");
});

$(".navWhat, .navWhy").click(function() {
  $("nav ul").fadeOut(100, function() {
    $("nav ul").removeClass("topNavLeft");
    $("nav ul").addClass("topNavRight");
    $("nav ul").fadeIn(1600, function() {});
  });
});

$(".navWho, .navWhere, .navHow").click(function() {
  $("nav ul").fadeOut(100, function() {
    $("nav ul").removeClass("topNavRight");
    $("nav ul").addClass("topNavLeft");
    $("nav ul").fadeIn(1600, function() {});
  });
});

// RESET NAV BAR WHEN CLICKING HOME
$(".nameP a").click(function() {
    $(".topNav li a").removeClass("navClicked");
    $(".topNav").removeClass("topNavRight");
    $(".topNav").addClass("topNavLeft");
});


// PROJECT MODAL - ALIUM
$("#aliumProjectModal").mouseenter(function() {
  $(this).delay(500).queue(function() {
    $(".whatImage").hide("slow")
    $("#aliumModalImg").show("slow")
  });
});
$("#aliumProjectModal").mouseleave(function() {
  $(".whatImage").show("slow")
  $("#aliumModalImg").hide("slow");
});

// PROJECT MODAL - FLIPPER
$("#flipProjectModal").mouseenter(function() {
  $(".whatImage").hide("slow")
  $("#flipModalImg").show("slow")
});
$("#flipProjectModal").mouseleave(function() {
  $(".whatImage").show("slow")
  $("#flipModalImg").hide("slow");
});

// DARK MODE
const body = document.body;

$("#chk").click(function() {
  if ($("#chk").prop("checked")) {
    $(body).css("background-color", "rgb(140, 140, 140)");
    $(".label").css("background-color", "#5e5e5e")
    $(".hoverMe").css("color", "rgb(71, 71, 71)");
    $(".centerImage").addClass("altCenterImage");
  } else {
    $(body).css("background-color", "#0e0e0e");
    $(".label").css("background-color", "#292929")
    $(".hoverMe").css("color", "rgb(176, 176, 176)");
    $(".centerImage").removeClass("altCenterImage");
  }
})

// MOBILE DROP DOWN MENU
$("#dropDown").click(function() {
  $(".navLink").slideToggle();
});


// SCROLL ACTIVE NAVBAR
// $(document).ready(function(){
//    $("section").mouseenter(function(){
//    	 var id = $(this).attr('id');
//    	 $('a').removeClass('navClicked');
//    	 $("[href=#"+id+"]").addClass('navClicked');
//    });
// });
