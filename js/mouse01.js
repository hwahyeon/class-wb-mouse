
//출력용
window.addEventListener("mousemove", function(event){
    document.querySelector(".clientX").innerText = event.clientX;
    document.querySelector(".clientY").innerText = event.clientY;
    document.querySelector(".offsetX").innerText = event.offsetX;
    document.querySelector(".offsetY").innerText = event.offsetY;
    document.querySelector(".pageX").innerText = event.pageX;
    document.querySelector(".pageY").innerText = event.pageY;
    document.querySelector(".screenX").innerText = event.screenX;
    document.querySelector(".screenY").innerText = event.screenY;
});

//마우스 움직이기
window.addEventListener("mousemove", function(event){
    // document.querySelector(".cursor").style.left = e.clientX -25 + "px";
    // document.querySelector(".cursor").style.top = e.clientY -25 + "px";

    let x = event.clientX -25 + "px";
    let y = event.clientY -25 + "px";
    document.querySelector(".cursor").style.cssText = "left:" + x + "; top:" + y;

// document.querySelector(".mouseCont .style1").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style1");
// });
// document.querySelector(".mouseCont .style1").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style1");
// });
// document.querySelector(".mouseCont .style2").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style2");
// });
// document.querySelector(".mouseCont .style2").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style2");
// });
// document.querySelector(".mouseCont .style3").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style3");
// });
// document.querySelector(".mouseCont .style3").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style3");
// });
// document.querySelector(".mouseCont .style4").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style4");
// });
// document.querySelector(".mouseCont .style4").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style4");
// });
// document.querySelector(".mouseCont .style5").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style5");
// });
// document.querySelector(".mouseCont .style5").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style5");
// });
// document.querySelector(".mouseCont .style6").addEventListener("mouseover", function(){
//     document.querySelector(".cursor").classList.add("style6");
// });
// document.querySelector(".mouseCont .style6").addEventListener("mouseout", function(){
//     document.querySelector(".cursor").classList.remove("style6");
// });

// for()
// for( let i=1; i<=6; i++ ){
//     document.querySelector(".mouseCont .style"+i).addEventListener("mouseover", function(){
//         document.querySelector(".cursor").classList.add("style"+i);
//     });
//     document.querySelector(".mouseCont .style"+i).addEventListener("mouseout", function(){
//         document.querySelector(".cursor").classList.remove("style"+i);
//     });
// }

// forEach()
// document.querySelectorAll(".mouseCont span").forEach((element, index) => {
//     element.addEventListener("mouseover", () => {
//         document.querySelector(".cursor").classList.add("style"+(index+1));
//     });
//     element.addEventListener("mouseout", function(){
//         document.querySelector(".cursor").classList.remove("style"+(index+1));
//     });
// })

// getAttribute()
document.querySelectorAll(".mouseCont span").forEach(element => {
    let style = element.getAttribute("class");
    //console.log(style)

    element.addEventListener("mouseover", () => {
        document.querySelector(".cursor").classList.add(style);
        })
    element.addEventListener("mouseout", () => {
        document.querySelector(".cursor").classList.remove(style);
        })
    })
});