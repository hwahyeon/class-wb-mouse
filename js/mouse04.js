function mouseMove(e){
    let pageX = 0,
        pageY = 0,
        standardX = 0,
        standardY = 0,
        maxX = 0,
        maxY = 0,
        angleX = 0,
        angleY = 0,
        softX = 0,
        softY = 0;

    //마우스 값
    pageX = e.pageX;
    pageY = e.pageY;

    //기준점 가운데로 변경 : 원래 기준점은 0, 0
    standardX = window.innerWidth/2 - pageX;
    standardY = window.innerHeight/2 - pageY;

    //최대값, 최소값
    maxX = Math.max(-750, Math.min(750, standardX));
    maxY = Math.max(-250, Math.min(250, standardY));

    //각도를 줄이는 설정
    angleX = maxX * 0.12;
    angleY = maxY * 0.12;

    //부드럽게 설정
    softX += (angleX - softX) * 0.4;
    softY += (angleY - softY) * 0.4;

    //이미지 움직임
    const move = document.querySelector(".moveImage");
    move.style.transform = "translate(-50%, -50%) perspective(600px) rotateX("+ softY +"deg) rotateY("+ -softX +"deg)";

    //커서
    gsap.to(".cursor", {duration: .3, left: pageX, top: pageY});

    //출력
    document.querySelector(".pageX").textContent = pageX;
    document.querySelector(".pageY").textContent = pageY;
    document.querySelector(".standardX").textContent = standardX;
    document.querySelector(".standardY").textContent = standardY;
    document.querySelector(".maxX").textContent = maxX;
    document.querySelector(".maxY").textContent = maxY;
    document.querySelector(".angleX").textContent = parseInt(angleX);
    document.querySelector(".angleY").textContent = parseInt(angleY);
    document.querySelector(".softX").textContent = Math.round(softX);
    document.querySelector(".softY").textContent = Math.round(softY);
}


document.addEventListener("mousemove", mouseMove);