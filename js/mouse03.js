const cursor = document.querySelector(".cursor");


// 움직임 효과
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {duration: 0.5, left: e.pageX - 5, top: e.pageY - 5 });
});

// 오버 효과
document.querySelectorAll(".mouseCont em").forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        document.querySelector(".cursor").classList.add("active");
    });
    elem.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").classList.remove("active");
    });
});

//출력용
document.querySelectorAll(".info.bottom li").forEach(elem => {
    elem.addEventListener("click", () => {
        //const text = this.innerHTML; old version
        const text = elem.textContent || elem.innerHTML;
        document.querySelector(".cursor").style.mixBlendMode = text;
    });
    elem.classList.remove("active");
});