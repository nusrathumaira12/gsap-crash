var menu = document.querySelector("#nav i")

var main = document.querySelector("#main");
var cross = document.querySelector("#full i")
var cursor = document.querySelector("#cursor")
var Path = `M 200 100 Q 500 100 990 100`

var finalPath= `M 200 100 Q 500 100 990 100`

var string = document.querySelector("#string")

function breakTheText(){
    var title = document.querySelector("#nav h2")
var titleText = title.textContent
var splittedText = titleText.split("")
var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})
title.innerHTML = clutter
} 
breakTheText()

gsap.from("#nav h2 span", {

     y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})

main.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
x: dets.x,
y: dets.y,
duration: 0.6,


   })
})

gsap.from("h1",{
    x: -100,
     opacity: 0,
   duration: 0.5,
   delay: 0.2,
})
string.addEventListener("mousemove", function(dets){
    path = `M 200 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path",{
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    })
   
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})


// gsap.from(title,{
    
//    opacity: 0,
//    duration: 0.8,
//    delay: 0.8,
//    y:-50,
//    stagger: -1
// })

var tl = gsap.timeline()

tl.to("#full",{
    right: 0,
    duration: 0.5

})

tl.from("#full h4",{
    x: 150,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0
})
tl.from("#full i", {
    opacity: 0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})

function marqueAnimation(){
window.addEventListener("wheel", function(dets){
if(dets.deltaY >0){

    gsap.to(".marque", {
transform: "translateX(-200%)",
repeat: -1,
duration: 4,

ease: "none"
    })


    gsap.to(".marque img",{
        rotate:180
    })
} else{
gsap.to(".marque", {
transform: "translateX(0%)",
repeat: -1,
duration: 4,

ease: "none"
    })
      gsap.to(".marque img",{
        rotate:0
    })
}
})

}
marqueAnimation()