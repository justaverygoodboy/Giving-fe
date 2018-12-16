$(document).ready(function () {
  function activity() {
    var token = localStorage["token"]
    $.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:5000/api/activity',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'passport ' + token
      },
      success: function (res) {
        if (res.status == 1) {
          var id = localStorage["id"]
          var thisId = parseInt(id) + 1
          var activities = res.data[id]
          $(".title").text(activities.title)
          $(".organizer").text(activities.organizer)
          $(".time").text(activities.time)
          $(".content").text(activities.content)
          $(".act-bg").attr("src", "http://127.0.0.1:5000" + activities.bg_pic_url)
          var doing_ids = res.doing_act_id
          for(i=0;i<doing_ids.length;i++){
            var doing_id = doing_ids[i].id
            if(doing_id == thisId){
              $('.join').attr("src","img/join-grey.png")
              // 按钮变灰
              $(".join").off("click");
            }
          }
        } else {
          alert("请求失败")
        }
      }
    })
  }
  activity()
})
//我要加入！
function join() {
  var token = localStorage["token"]
  var id = parseInt(localStorage["id"])
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5000/api/join',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'passport ' + token
    },
    data: JSON.stringify({
      activity_id: id + 1,
    }),
    success: function (res) {
      if (res.status == 1) {
        alert("加入成功")
        $('.join').attr("src","img/join-grey.png")
      } else if (res.status != 1) {
        alert("加入失败")
      }
    }
  })
}