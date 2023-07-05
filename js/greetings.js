const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDo = document.querySelector("#todo");
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CALSSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  const hour = new Date().getHours();
  const say = hour > 6 ? (hour < 12 ? "Cheer up, today!" : hour < 19 ? "Good afternoon" : "Good night") : "Have a sweet dream";
  greeting.classList.remove(HIDDEN_CALSSNAME);
  greeting.innerText = `${say} ${userName}`;
  toDo.classList.remove(HIDDEN_CALSSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  toDo.classList.add(HIDDEN_CALSSNAME);
} else {
  paintGreetings();
}
