// $(document).ready(function() {
//
// $(".projectImg").click(function() {
//   $(".innerImg").attr("src", $(this).find("projectImg").attr("src"));
//   $('#projectModal').modal('show')
// });
// });


// function onClick(element) {
//   document.getElementById("modalImg").src = element.src;
//   document.getElementById("modal").style.display = "block";
// }
//

// $(document).ready(function() {
//   $(".projectImg, .projectPreview").click(function() {
//     $(".projectPreview").toggle("display");
//     $(".whatImage").toggle("display");
//     $(".projectPreview").attr("src", ".projectImg.src").load(function() {
//       this.width;
//     });
//   });
// });

$(document).ready(function() {
  $(".portfolioImg, .portfolioPreview").click(function() {
    $(".portfolioPreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".portfolioProjectInfo").toggle("display");
  });
  $(".closeModal").click(function() {
    $(".projectPreview").hide("slow");
    $(".whatImage").toggle("display");
    // $(this).parent(".portfolioProjectInfo").toggle("display");
    $(".portfolioProjectInfo, .paywaivProjectInfo, .allaboveProjectInfo, .wowProjectInfo, .flipperProjectInfo, .aliumProjectInfo").hide("fast");
  });


  $(".paywaivImg, .paywaivPreview").click(function() {
    $(".paywaivPreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".paywaivProjectInfo").toggle("display");
  });

  $(".allaboveImg, .allabovePreview").click(function() {
    $(".allabovePreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".allaboveProjectInfo").toggle("display");
  });

  $(".wowImg, .wowPreview").click(function() {
    $(".wowPreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".wowProjectInfo").toggle("display");
  });

  $(".flipperImg, .flipperPreview").click(function() {
    $(".flipperPreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".flipperProjectInfo").toggle("display");
  });

  $(".aliumImg, .aliumPreview").click(function() {
    $(".aliumPreview").toggle("display");
    $(".whatImage").toggle("display");
    $(".aliumProjectInfo").toggle("display");
  });

});
