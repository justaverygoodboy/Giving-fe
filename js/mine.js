$(document).ready(function(){
  var username = window.localStorage.getItem('username')
  var department = window.localStorage.getItem('department')
  $('#username').html(username)
  $('#department').html(department)
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
$('.about-us').click(function () {
})
$('#tree').click(function () {
  location.replace('tree.html')
})