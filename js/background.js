const images = [
  "sea-gd10d4edb0_1920.jpg",
  "meadow-g8693e2e79_1920.jpg",
  "window-gb4047e753_1920.jpg"
]

const BG = "background";

const chosenImage = images[Math.floor(Math.random() * images.length)];  // images 랜덤으로 가져오기

const bgImage = document.createElement("img"); //정한 tagName의 HTML 요소를 만들어 반환합니다.
bgImage.className = BG;

bgImage.src = `img/${chosenImage}`;   //img태그의 src 채워주기
document.getElementById("background-cover").appendChild(bgImage); // HTML  background-cover의 자식태그로 추가해줌 //JavaScript-->HTML
