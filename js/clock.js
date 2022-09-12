const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();    // 날짜 data를 가져옴
  const hours = String(date.getHours()).padStart(2,"0");  // 시간을 가져오고 01,02.. 
  const minutes = String(date.getMinutes()).padStart(2,"0");  //표현하기위해 string으로 변환후 padStart사용
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock(); // 시계 바로 후촐. 없으면 1초 후에 시계 생성
// setTimeouts() 몇 초후 한번만 반복
setInterval(getClock, 1000);  // 함수를 몇초 후에 호출할지-- 1초후 반복 

