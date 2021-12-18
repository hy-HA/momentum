const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

//기존 랜덤이미지 추가를 위한 코드
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);


//이미지를 백그라운드형식으로 넣기위해서 코드 변경
document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;