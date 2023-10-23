// gsap 방법
// function mouseMove(e) {
//     let positionSlow = (e.pageX - window.innerWidth / 2) * 0.1;
//     let positionFast = (e.pageX - window.innerWidth / 2) * 0.2;
//
//     gsap.to(".spanSlow", { duration: 0.4, x: positionSlow });
//     gsap.to(".spanFast", { duration: 0.4, x: -positionFast });
//     gsap.to(".mImg", {
//         duration: 0.4,
//         rotation: positionSlow / 30,
//     });
// }


const spanSlow = document.querySelectorAll(".spanSlow")
const spanFast = document.querySelectorAll(".spanFast")

function mouseMove(e){
    let positionSlow = (e.pageX - window.innerWidth / 2) * 0.1;
    let positionFast = (e.pageX - window.innerWidth / 2) * 0.2;

    // spanSlow.style.transform = `translate(${positionSlow}px)`;
    // spanFast.style.transform = `translate(${positionFast}px)`;

    // 다중 선택
    spanSlow.forEach(elem => {
        elem.style.transform = `translate(${positionSlow}px)`;
    });
    spanFast.forEach(elem => {
        elem.style.transform = `translate(${positionFast}px)`;
    });

    // 커서
    gsap.to(".cursor", {duration: 0.3, left: e.pageX - 10, top: e.pageY - 10});
    // 출력용
    document.querySelector(".pageX").textContent = e.pageX;
    document.querySelector(".pageY").textContent = e.pageY;
    document.querySelector(".positionSlow").textContent = parseInt(positionSlow);
    document.querySelector(".positionFast").textContent = parseInt(positionFast);
}


window.addEventListener("mousemove", mouseMove);