$(document).on("mousemove", function (ev) {

   var mouseX = ev.originalEvent.pageX
   var mouseY = ev.originalEvent.pageY

   $("img").each(function () {
     var imgX = $(this).position().left + 70
     var imgY = $(this).position().top + 70

     var diffX = mouseX - imgX
     var diffY = mouseY - imgY

     var radians = Math.atan2(diffY, diffX)

     var angle = radians * 180 / Math.PI

     $(this).css("transform", "rotate(" + angle + "deg)")

   })

   $("div").each(function () {
     var imgX = $(this).position().left + 70
     var imgY = $(this).position().top + 70

     var diffX = mouseX - imgX
     var diffY = mouseY - imgY

     var radians = Math.atan2(diffY, diffX)

     var angle = radians * 180 / Math.PI

     $(this).css("transform", "rotate(" + angle + "deg)")

   })
})

var count = 0
var images = ["stylesheets/images/star_red.svg", "stylesheets/images/star_yellow.svg"]

setInterval(function (){
   count = count + 1
   count = count % images.length

   var image = images[count]

$("img").attr("src", image)
},3000)

function criateStars() {
  $("body").append('<div></div>').css({
    'top': Math.floor(Math.random() * 85) + 'vh',
    'left': Math.floor(Math.random() * 90) + 'vw',
  })
}

function createStars() {
  $(document).click(
    function () {
      $("body").append('<div style="top:' + Math.floor(Math.random() * 80) + 'vh; left:' + Math.floor(Math.random() * 80) + 'vw; width:' +
      Math.floor(Math.random() * 500) + 'px"></div>')})
}

$(function(){
  createStars()
});
