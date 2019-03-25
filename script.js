//Mousemoving

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
})

//Colorchanging

var count = 0
var images = ["stylesheets/images/star_red.svg", "stylesheets/images/star_yellow.svg"]

setInterval(function (){
   count = count + 1
   count = count % images.length

   var image = images[count]

$("img").attr("src", image)

},3000)


//More stars
$.noConflict(true)
$(function(){
  $(.more)
})
