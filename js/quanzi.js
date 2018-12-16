// top blur
$(function() {
  var duplicate = $(".quanzi").clone();
  var contentBlurred = $("<div></div>");
  $(contentBlurred).append(duplicate);
  $(contentBlurred).addClass('blur-content-header');
  $(".header").append(contentBlurred);

  var firsttrans = $('.header').height()+$('.search').height()+50;
  var tr ='translate3d(0,' + (firsttrans + 'px') + ',0)';
  $(duplicate).css({"-webkit-transform":tr,"-moz- transform":tr,"transform":tr,"-webkit-filter": 'blur(20px)'});

  $(window).bind("scroll", function(){
    $('.header').css({borderBottom: '1px solid rgb(198,208,207'})
    $('.header p').animate({fontSize:'5.87vw',marginLeft:'0',paddingLeft:'39.27vw'});
    $('.header').animate({height:'13.06vw'});
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    var translation;
    translation = 'translate3d(0,' + (-top+firsttrans + 'px') + ',0)';
    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation,"-webkit-filter": 'blur(20px)'});
  })
})

//footer blur
$(function() {
  var duplicate = $(".quanzi").clone();
  var contentBlurred = $("<div></div>");
  $(contentBlurred).append(duplicate);
  $(contentBlurred).addClass('blur-content-footer');
  var translation;
  $("footer").append(contentBlurred);

  var firsttrans = ($(window).height()/100)*151;
  var tr='translate3d(0,' + (firsttrans + 'px') + ',0)';
  $(duplicate).css({"-webkit-transform":tr,"-moz-transform":tr,"transform":tr,"-webkit-filter": 'blur(5px)'});
  $(window).bind("scroll", function(){
    var top = $(this).scrollTop();
    translation = 'translate3d(0,' + (firsttrans-top + 'px') + ',0)';
    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation,"-webkit-filter": 'blur(5px)'});
  })
})
