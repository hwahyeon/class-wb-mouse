const cursor = document.querySelector(".cursor");
const circle = cursor.getBoundingClientRect();
// const width = cursor.offsetWidth;
// const height = cursor.offsetHeight;
// console.log(circle.width)
// console.log(width)

function mouseMove(e){
    gsap.to(cursor, {duration: .3, left: e.pageX - circle.width, top: e.pageY - circle.height});
    
    //출력용
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;
};

document.addEventListener("mousemove", mouseMove);