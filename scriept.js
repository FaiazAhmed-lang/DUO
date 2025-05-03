
function ab(){
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

ab();

let cur = document.querySelector(".cursor");

document.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
        x:dets.x+ 20+"px",
        y:dets.y +20+  "px",
        ease : ""
    })
})
 let vid = document.querySelector(".page1 video");



vid.addEventListener("mouseenter",function(){
    cur.style.width = '170px';
    cur.style.height = '35px';
    cur.style.background = 'red';
    cur.style.position = 'fixed';
    cur.style.borderRadius = '50px';
    cur.style.zIndex = '4';
    cur.style.mixBlendMode = 'difference';
    cur.style.transition = 'left linear 0.1s, top linear 0.1s';

    cur.style.display = 'flex';
    cur.style.alignItems = 'center';  // Vertically center
    cur.style.justifyContent = 'center';  

    cur.innerHTML = "<h3>look now</h3>"
    
});

vid.addEventListener("mouseleave",function(){
    cur.style.width = '25px';
    cur.style.height = '25px';
    cur.style.background = 'red';
    cur.style.position = 'fixed';
    cur.style.borderRadius = '50%';
    cur.style.zIndex = '4';
    cur.style.mixBlendMode = 'difference';
    cur.style.transition = 'left linear 0.1s, top linear 0.1s';

    cur.innerHTML = ""

});






var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 27%",
        end:"top 0%",
        scrub:2,
        }
});
tl.to(".page1 h1",{
    x:-100,
    duration:1,

},"mama");
tl.to(".page1 h2",{
    x:100,
    duration:1,

},"mama");

tl.to(".page1 video",{
    width:"90%",
},"mama")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -115%",
        end:"top -130%",
        scrub:2,
        }
});

tl2.to(".main",{
   backgroundColor:"white"
})


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -480%",
        end:"top -500%",
        scrub:2,
        }
});

tl3.to(".main",{
    backgroundColor:"#111",

});



var box = document.querySelectorAll(".box");

box.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
         var att = elem.getAttribute("data-image")
         cur.style.width = "400px"
         cur.style.height = "400px"
         cur.style.borderRadius = "0px"
         cur.style.backgroundImage = `url(${att})` 

    })
    elem.addEventListener("mouseleave",function(){
         elem.style.backgroundColor = "transparent"
         cur.style.width = "25px"
         cur.style.height = "25px"
         cur.style.borderRadius = "50%"
         cur.style.backgroundImage = `none` 
    })
});


var purple = document.querySelector(".purple");








var nav = document.querySelectorAll(".nav-2 h4")

nav.forEach(function(c, index){
    console.log(index)
    c.addEventListener("mouseenter",function(){
var h1 = document.querySelectorAll(".mar h1")

         purple.style.display = "flex"
            purple.style.opacity= "1"
            if(index == 0){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>HOME HOME HOME HOME</h1>"
                       
                })

            }
            else if(index == 1){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>WORK WORK WORK WORK</h1>"
                       
                })
            }
            else if(index == 2){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>SERVIECES SERVIECES SERVIECES SERVIECES</h1>"
                       
                })
            }
            else if(index == 3){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>STUDIO STUDIO STUDIO STUDIO</h1>"
                       
                })
            }
            else if(index == 4 ){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>JOURNAL JOURNAL JOURNAL JOURNAL</h1>"
                       
                })
            }
            else if(index == 5){
                h1.forEach(function(a){
                    // console.log(a)
                       a.innerHTML = "<h1>CONTACT CONTACT CONTACT CONTACT </h1>"
                       
                })
            }
    })
    c.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity= "0"
})
    
})




gsap.to(".mar",{
    transform:"translateX(-200%)",
    duration:30,
    ease:"none",
    repeat:-1
})

// gsap.to(".main",{
//     to:50;
//     frrom:40;
// })
// gsap.addEventListener("mosemove",function(){
//       DocumentType*("queru").moisemo[VideoEncoder(
//         a.innerHeight.innerHTML ="game change"
//         console.log()
//         console.log(.marque)
//       )]
// })












let originalTitle = document.title;
let titleIndex = 0;
let titleArray = ["😊😊hi!", "🔫🔫don't run!", "Look Here👀👀!", "Hello, World🌎🌎!"];

setInterval(() => {
    document.title = titleArray[titleIndex];
    titleIndex = (titleIndex + 1) % titleArray.length;
}, 1000);


