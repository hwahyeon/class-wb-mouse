document.querySelector(".moveImage").addEventListener("mousemove", function(e){
    //커서
    gsap.to(".cursor", {duration: .2, left: e.pageX -10, top: e.pageY -10});

    //마우스 좌표 값
    let pageX = e.pageX;
    let pageY = e.pageY;

    //기준점 가운데로 변경
    let standardX = window.innerWidth/2 - pageX;
    let standardY = window.innerHeight/2 - pageY;

    //이미지 움직임
    const move = document.querySelector(".mImg img");
    move.style.transform = "translate(" + standardX/20 + "px," + standardY/20 + "px)";

    //출력
    document.querySelector(".pageX").textContent = pageX;
    document.querySelector(".pageY").textContent = pageY;
    document.querySelector(".standardX").textContent = standardX;
    document.querySelector(".standardY").textContent = standardY;
});