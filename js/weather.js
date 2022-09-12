
const API_KEY = "30c8ee0db48b691c93abebd4f224a614"

//위치 정보 OK함수
function onGeoOk(position) {  //JavaScript는 우리가 필요한 객체를 주기에 객체를 채울 공간(position)만 있으면 됨
  const lat = position.coords.latitude;     //위도
  const log = position.coords.longitude;    //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`

  fetch(url)  //JavaScript가 대신 URL을 요청함
    .then((response) =>response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:last-child");
      city.innerText = data.name+ " / ";
      weather.innerText = `${data.weather[0].main} / `;
      temperature.innerText = `${ data.main.temp } 'F `;
    })
}

// 위치 정보에 Error가 발생했을 때 함수
function onGeoError() { 
  alert("Can't find you. No weather of you");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);   // 현재 나의 위치를 알 수 있음