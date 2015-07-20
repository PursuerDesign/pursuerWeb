/**
 * Created by WXL on 7/12/15.
 */
$(document).ready(function() {
  var t;
  $(window).scroll(function () {
    t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t > 0) {
      $('.navbar').removeClass('navbar-default').addClass('navbar-default-blue');
      $('.navbar-brand').css('background', 'url("images/public/logo2.png") top left no-repeat');
      $('.marker').css('background-color', '#025499');
    } else {
      $('.navbar').removeClass('navbar-default-blue').addClass('navbar-default');
      $('.navbar-brand').css('background', 'url("images/public/logo1.png") top left no-repeat');
      $('.marker').css('background-color', '#fff');
    }
  });

});
