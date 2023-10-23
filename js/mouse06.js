// 단일선택
// const word = document.querySelector(".word");

// function shadow(e){
//     const { x, y } = e;
//     const rect = word.getBoundingClientRect();
//     const mouseX = (x - rect.left - rect.width/2) / rect.width * 2;
//     const mouseY = (y - rect.top - rect.height/2) / rect.height * 2;

//     word.style.textShadow = `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4),
//                             ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
//                             ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
//                             ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;
//     //출력
//     document.querySelector(".mouseX").textContent = Math.round(mouseX);
//     document.querySelector(".mouseY").textContent = Math.round(mouseY);
//     document.querySelector(".mouseX2").textContent = Math.round(-mouseX);
//     document.querySelector(".mouseY2").textContent = Math.round(-mouseY);
// }

// document.addEventListener("mousemove", shadow);

// 다중선택
function shadowMulti(e){
    document.querySelectorAll(".word").forEach(elem => {
        const { x, y } = e;
        const rect = elem.getBoundingClientRect();
        const mouseX = (x - rect.left - rect.width/2) / rect.width * 2;
        const mouseY = (y - rect.top - rect.height/2) / rect.height * 2;
    
        elem.style.textShadow = `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4),
                                ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4),
                                ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4),
                                ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;
    
        document.querySelector(".mouseX").textContent = Math.round(mouseX);
        document.querySelector(".mouseY").textContent = Math.round(mouseY);
        document.querySelector(".mouseX2").textContent = Math.round(-mouseX);
        document.querySelector(".mouseY2").textContent = Math.round(-mouseY);
    })
}

document.addEventListener("mousemove", shadowMulti);