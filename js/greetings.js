const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLonginSubmit(event) {
  event.preventDefault();   // submit함으로서 윈도우 기본 속성을 방지
  loginForm.classList.add(HIDDEN_CLASSNAME);  // 로그인폼 숨김
  const username = loginInput.value;          // LoginInput의 사용자로부터 data 가져옴
  localStorage.setItem(USERNAME_KEY, username);   // LocalStorage에 data 저장
  paintGreetings(username);                   // 사용자로부터의 data로 paintGreetings 호출
}

function paintGreetings(username) {       
  greeting.innerText = `Hello ${username}`;   // h1 태크 내용을 바꿈
  greeting.classList.remove(HIDDEN_CLASSNAME);  // h1 태크 hidden제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);   // localStorage로부터 key받아옴

if (savedUsername === null) {     // LocalStorage에 data가 없다면
  loginForm.classList.remove(HIDDEN_CLASSNAME);   // 로그인폼 HIdden을 제거
  loginForm.addEventListener("submit", onLonginSubmit);   // onLoginSubmit 함수 호출
} else {
  paintGreetings(savedUsername);  //localstorage로부터 가져와서 paintGreetings를 호출
} 