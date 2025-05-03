



window.addEventListener("wheel",function(dets){
    // console.log(dets.deltaY)
    if(dets.deltaY>0){
    //    console.log("sheedha scroll")
       gsap.to(".mar",{
        transform:"translateX(-200%)",
        duration:4,
        ease:"none",
        repeat:-1
    })
    gsap.to(".mar img",{
        rotate:180
    })
    }
    else{
        // console.log("teda scroll")
        gsap.to(".mar",{
            transform:"translateX(0%)",
            duration:4,
            ease:"none",
            repeat:-1
        })
        gsap.to(".mar img",{
            rotate:0
        })
    }
})


var human = {
   name : "g",
   canfly : false ,
   cantalk :  true ,

}

var shery = {
    cancode :true,
    cansolve:true,
}

var p = shery._proto_ = human ;

console.log(this);


function abcg(){
    console.log(this)
}

abcg()



























