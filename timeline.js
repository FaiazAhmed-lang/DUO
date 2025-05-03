let main = document.querySelector(".main");
let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let cursor1 = document.querySelector(".cursor1");
let full = document.querySelector(".full");
let i = document.querySelector(".nav i");
let x = document.querySelector(".full i");

 let tl = gsap.timeline();

body.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out",
        scale:1
    })
}) 
body.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
       scale:0
    })
}) 
tl.to(full,{
    right:0,
    duration:1,

})
tl.from(".full h4",{
    x:100,
    stagger:0.3,
    opacity:0
});
tl.pause()
i.addEventListener("click",function(){
    // console.log("wtfedytf")
    tl.play()
})
x.addEventListener("click",function(){
    // console.log("wtfedytf")
    tl.reverse()
})