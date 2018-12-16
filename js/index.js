
// top blur
$(function() {
  var duplicate = $(".app").clone();
  var contentBlurred = $("<div></div>");
  $(contentBlurred).append(duplicate);
  $(contentBlurred).addClass('blur-content-header');
  var translation;
  $(".header").append(contentBlurred);

  var firsttrans = $('.header').height()+$('.search').height()+50;
  var tr ='translate3d(0,' + (firsttrans + 'px') + ',0)';
  $(duplicate).css({"-webkit-transform":tr,"-moz- transform":tr,"transform":tr,"-webkit-filter": 'blur(20px)'});

  $(window).bind("scroll", function(){
    $('.header').css({borderBottom: '1px solid rgb(198,208,207'})
    $('.header p').animate({fontSize:'5.87vw',marginLeft:'0',paddingLeft:'39.27vw'})
    $('.header').animate({height:'13.06vw'})
    var top = $(this).scrollTop() // 当前窗口的滚动距离
    var translation
    translation = 'translate3d(0,' + (-top+firsttrans + 'px') + ',0)'
    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation,"-webkit-filter": 'blur(20px)'})
    scrollTop=document.body.scrollTop

  })
})

//footer blur
$(function() {
  var duplicate = $(".app").clone();
  var contentBlurred = $("<div></div>");
  $(contentBlurred).append(duplicate);
  $(contentBlurred).addClass('blur-content-footer');
  var translation;
  $("footer").append(contentBlurred);

  var firsttrans = ($(window).height()/100)*56+($('#banner').height());
  var mg = ($(window).height()/100)*9.74;
  var tr='translate3d(0,' + (firsttrans + 'px') + ',0)';
  $(duplicate).css({"margin-bottom":mg,"-webkit-transform":tr,"-moz-transform":tr,"transform":tr,"-webkit-filter": 'blur(20px)'});

  $(window).bind("scroll", function(){
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    translation = 'translate3d(0,' + (firsttrans-top + 'px') + ',0)';
    $(duplicate).css({"-webkit-transform":translation,"-moz-transform":translation,"transform":translation,"-webkit-filter": 'blur(20px)'});
  })
})
//activities获取数据
$(document).ready(function () {
  function activity() {
    var token = window.localStorage["token"]
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:5000/api/activity',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'passport ' + token
      },
      success: function (res) {
        if (res.status == 1) {
          var data = res.data
          for (i = 0; i < data.length; i++) {
            var activities = data[i];
            console.log(activities);
            var pic_url = "http://127.0.0.1:5000" + activities.pic_url;
            var cards = $(".card-item");
            var html = '<a href="article.html"><img src=' + pic_url + ' /></a>'
            cards.append(html)
            $("a").click(function () {
              var id = $(this).index();
              window.localStorage["id"] = id;
            })
          }
        }
      }
    })
  }
  activity()
})


