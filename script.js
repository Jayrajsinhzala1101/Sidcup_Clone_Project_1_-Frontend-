let cursor = document.querySelector("#cursor");
let blr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x  + "px"
    cursor.style.top = dets.y + "px"
    blr.style.left = dets.x - 200 + "px"
    blr.style.top = dets.y - 200 + "px"
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"25%",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        // markers:true,
        scrub:1
    }
})
// gsap.to("#btn1",{
//     y:"-55%",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1
//     }
// })
// gsap.to("#btn2",{
//     y:"-55%",
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:1
//     }
// })

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



gsap.to(".h3text > h3",{
    y:"-120",
    scrollTrigger:{
        trigger:"#photo2",
        scroller:"body",
        start:"top 85%",
        end:"top 80%",
        // markers:true,
        scrub:3
    }
})
// gsap.to("#btn1",{
    
// })

let navh4 = document.querySelectorAll("#nav > h4")
navh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "1px solid white"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "1px solid #91B508"
        cursor.style.backgroundColor = "#91B508"
    })
})

