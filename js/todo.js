const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

//localStorage에 key, value를 저장하는 함수 (ToDos)
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 JavaScript 값이나 객체를 JSON 문자열로 변환합니다
}

// toDos를 삭제하면 브라우저, localStorage에서 제거되는 함수
function deleteTodo(event) {
  const li = event.target.parentElement;  //이벤트 발생 대상 객체의 부모 객체(li)를 받음
  li.remove();                            //부모객체 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));    //삭제한 li태크의 id와 다른 data만 남음
  saveToDos();                                                    
}

//toDoList에 toDos 목록들을 추가하는 함수
function painTodo(newTodo) {
  const li = document.createElement("li");      // li 태그 생성
  li.id = newTodo.id;                           // 각 list들을 id로 구별
  const span = document.createElement("span");  // span 태그 생성
  span.innerText = newTodo.text;                     // span 내용(객체의 text)추가

  const button = document.createElement("button");  //button태그 생성
  button.innerText = "❌";                          // button 태그 내부
  button.addEventListener("click", deleteTodo);     // click event 함수 호출

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(checkbox);
  li.appendChild(span);                         // li 자식 노드로 span 추가
  li.appendChild(button);                       // li 자식 노드로 button 추가
  toDoList.appendChild(li);                     // toDoList에 ul> li 추가
}

// toDoForm의 submit event후 
function handleToDoSubmit(event) {
  event.preventDefault();   //SUBMIT기본동작 방어
  const newTodo = toDoInput.value;  //사용자 입력 값 받기
  toDoInput.value = "";   // 사용자 입력값 비우기
  const newTodoObj = {    // toDos의 객체생성
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // toDos에 삽입
  painTodo(newTodoObj);    // 사용자 입력값으로 painTodo 함수 호출
  saveToDos();
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

toDoForm.addEventListener("submit", handleToDoSubmit);    //form제줄

const savedToDos = localStorage.getItem(TODOS_KEY);   //localStorage에서 저장된 Key를 가져온다.
if (savedToDos !== null) {                            //localStorage에 저장된 Key가 있으면
  const parsedToDos = JSON.parse(savedToDos);         //JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.
  toDos = parsedToDos;
  parsedToDos.forEach(painTodo);                      //Key 각각의 요소들을 painTodo호출해서 새로고침 이후 브라우저에 계속 남아 있음.
}