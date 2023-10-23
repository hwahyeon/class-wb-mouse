const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

// 움직임 효과
document.addEventListener("mousemove", (e) => {
    // cursor.style.left = e.pageX; JS에선 먹히지 않는다.

    gsap.to(cursor, {duration: 0.3, left: e.pageX - 5, top: e.pageY - 5})
    gsap.to(follower, {duration: 0.8, left: e.pageX - 15, top: e.pageY - 15})
});

//오버 효과
// JS는 다중 선택이 안되므로 forEach를 활용해야 한다.
// let red = document.querySelectorAll(".mouseCont em");
// for (let i = 0; i < red.length; i++){
//     red[i].style.color = 'red';
// }
document.querySelectorAll(".mouseCont em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        follower.classList.add("active");
    })
    elem.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        follower.classList.remove("active");
    })
});

// 출력용
document.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").textContent = e.pageX
    document.querySelector(".pageY").textContent = e.pageY
});