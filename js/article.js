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
          console.log(id)
          var activities = res.data[id]
          console.log(activities)
          $(".title").text(activities.title)
          $(".organizer").text(activities.organizer)
          $(".time").text(activities.time)
          $(".content").text(activities.content)
          $(".act-bg").attr("src", "http://127.0.0.1:5000" + activities.bg_pic_url)
        }
        else {
          alert("请求失败")
        }
      }
    })
  }
  activity()
  join()
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
      data:JSON.stringify({
        activity_id: id+1,
      }),
      success: function (res) {
        if (res.status == 1) {
          alert("加入成功")
        }
        else if (res.status != 1) {
          alert("加入失败")
        }
      }
    })
  }


})

