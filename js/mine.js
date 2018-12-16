$(document).ready(function () {
  var department = localStorage["department"]
  alert(department)
  $("#department").html(department)
  function mine() {
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
          $('#username').html(res.name)
        } else {
          alert("请求失败")
        }
      }
    })
  }
mine()
});
$('#huodong').click(function () {
  location.replace("index.html")
})
$('#quanzi').click(function () {
  location.replace("quanzi.html")
})
$('.doing').click(function () {
  location.replace('doing-index.html')
})
$('.done').click(function () {
  location.replace('done-index.html')
})
$('.about-us').click(function () {})
$('#tree').click(function () {
  location.replace('tree.html')
})