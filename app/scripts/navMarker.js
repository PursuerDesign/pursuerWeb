$(function() {
  var ws = [];
  if($(window).width()>768){
    $('.navbar-nav li').each(function(index){
      ws[index] = $(this).outerWidth();
    });
    activeBorder = function(){
      var activeIndex = $('.navbar-nav li').index($('.navbar .active'));
      var left=0;
      for(var i =0; i<activeIndex;i++){
        left = left+ ws[i];
      }
      $('.marker').css({
        left:left+20,
        width:ws[activeIndex]-40
      });
    };
    activeBorder();
    $('.navbar-nav li a').on({
        click:function(){
          index  = $(this).parent().index();
          var left=0;
          for(var i =0; i<index;i++){
            left = left+ ws[i];
          }
          $('.marker').css({
            left:left+20,
            width:ws[index]-40
          });
        }
      }
    );
  }

});
