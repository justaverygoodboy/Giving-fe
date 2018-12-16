// top blur
$(function () {
  var duplicate = $(".cards").clone();
  var contentBlurred = $("<div></div>");
  $(contentBlurred).append(duplicate);
  $(contentBlurred).addClass('blur-content-header');
  var translation;
  $(".header").append(contentBlurred);

  // var firsttrans = $('.header').height()+$('.search').height()+50;
  // var tr ='translate3d(0,' + (firsttrans + 'px') + ',0)';
  // $(duplicate).css({"-webkit-transform":tr,"-moz- transform":tr,"transform":tr,"-webkit-filter": 'blur(20px)'});

  $(window).bind("scroll", function () {
    // $('.header').css({borderBottom: '1px solid rgb(198,208,207'})
    // $('.header p').animate({fontSize:'5.87vw',marginLeft:'0',paddingLeft:'39.27vw'})
    // $('.header').animate({height:'13.06vw'})
    var top = $(this).scrollTop() // 当前窗口的滚动距离
    var translation
    translation = 'translate3d(0,' + (-top + 'px') + ',0)'
    $(duplicate).css({
      "-webkit-transform": translation,
      "-moz-transform": translation,
      "transform": translation,
      "-webkit-filter": 'blur(20px)'
    })
    scrollTop = document.body.scrollTop
    // if(scrollTop = 0){
    //   $('.header').css({borderBottom: 'none'})
    //   $('.header p').animate({fontSize:'9.6vw',marginLeft:'4.4vw',paddingLeft:'39.27vw',paddingTop:'3.16vw'})
    //   $('.header').animate({height:'16.72vw'})
    // }
  })
})

$(document).ready(function () {
  var token = localStorage["token"]
  $.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/api/mine',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'passport ' + token
    },
    success: function (res) {
      if (res.status == 1) {
        for (i = 0; i < res.data.length; i++) {
          var pic_url = "http://127.0.0.1:5000" + res.data[i].pic_url
          var cards = $(".card-item");
          var html = '<a href="article.html"><img src=' + pic_url + ' /></a>'
          cards.append(html)
        }
      } else {
        alert("请求失败")
      }
    }
  })
})