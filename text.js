
function bre() {
    let h1text = document.querySelector("h1").textContent;
    let h1 = document.querySelector("h1");
    
    
    let split  = h1text.split("");
     
    let clutter = "";
    split.forEach(function(e){
        clutter +=  `<span>${e}</span>`
    })
    h1.innerHTML = clutter;
}

bre();

gsap.from("h1 span",{
    y:70,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger:-0.3
})










































































qefhegfefuiere             