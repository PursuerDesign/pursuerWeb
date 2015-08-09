
/* When user clicks the Icon */
$(".nav-toggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay-boxify").toggleClass("open");
});

///* When user clicks a link */
//$(".navbar-nav li a").click(function() {
//  $(".nav-toggle").toggleClass("active");
//  $(".navbar-collapse").toggleClass("in");
//});

/* When user clicks outside */
$(".navbar-collapse").click(function() {
  $(".nav-toggle").toggleClass("active");
  $(".navbar-collapse").toggleClass("in");
});
