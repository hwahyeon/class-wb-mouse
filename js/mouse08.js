document.addEventListener("mousemove", (e) => {
    const item = document.querySelectorAll(".item");

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    item.forEach((item) => {
        // const itemX = item.offsetLeft + 20;
        // const itemY = item.offsetTop + 20;
        // const diffX = mouseX - itemX;
        // const diffY = mouseY - itemY;
        // const radians = Math.atan2(diffY, diffX);
        // const angle = radians * 180 / Math.PI;

        // item.style.transform = "rotate("+ angle +"deg)";

        const itemX = item.offsetLeft - mouseX;
        const itemY = item.offsetTop - mouseY;
        const dist = Math.sqrt(itemX * itemX + itemY * itemY);
        const score = Math.exp(dist * -0.003);

        item.style.transform = `scale(${score})`; // 가까울수록 더 커짐.
    });

    //커서
    const cursor = document.querySelector(".cursor");
    gsap.to(cursor, {
        duration: 0.3,
        left: mouseX - 20,
        top: mouseY - 20,
    });

    //출력
    document.querySelector(".pageX").textContent = e.pageX;
    document.querySelector(".pageY").textContent = e.pageY;
});