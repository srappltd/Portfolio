gsap.to("#page2 .page2-top h1",{
    scrollTrigger:{
        trigger:"#page2",
        scroll:"#main",
        // markers:true,
        scrub:2,
        start:"top 30%",
        end:"top -10%",
        // pin:true
    },
    duration:5000,
    x:"600px"
})


// var circle = document.querySelector(".menu");
//         document.addEventListener("mousemove",function(dets){
//             var y = circle.offsetHeight;
//             var x = circle.offsetWidth;
//             circle.style.top = `${dets.pageY - y/2}px`;
//             circle.style.left = `${dets.pageX - x/2}px`;
//             // alert("sdf")
//         })


var container = document.querySelector("#footer .container");
    var menu = document.querySelector("#footer .container .menu");
    container.addEventListener("click",(dets)=>{
        var x = menu.offsetWidth;
            var y = menu.offsetHeight;
            // console.log((dets.x - (x/2))/(x/100));
            menu.style.transform = `translate(${(dets.x - x - 300)}%,${(dets.y - y - 50)}%)`;

    })