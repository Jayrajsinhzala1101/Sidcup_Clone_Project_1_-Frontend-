let cursor = document.querySelector("#cursor");
let blr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blr.style.left = dets.x - 200 + "px"
    blr.style.top = dets.y - 200 + "px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to(".text",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".text",
        scroller:"body",
        scrub:1,
        start:"top -30%",
        end:"top -80%"
    }
})

let i3 = document.querySelector("#i3");
i3.addEventListener("mousein",function(){
    innerText="jkfewjkjfiw"
})

gsap.to(".h3text > h3",{
    y:"-120",
    scrollTrigger:{
        trigger:"#photo2",
        scroller:"body",
        start:"top 20px",
        end:"top 60px",
        markers:true,
        scrub:3
    }
})