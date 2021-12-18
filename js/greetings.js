const loginForm = document.querySelector("#login-form");
const loginHello = document.querySelector("#login-form_hello");
const loginInput = document.querySelector("#login-form_text");
const loginBtn = document.querySelector("#login-form_button");
const greeting = document.querySelector("#greeting");

const toDoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem("USERNAME_KEY", username);
   loginHello.classList.add(HIDDEN_CLASSNAME);
   loginInput.classList.add(HIDDEN_CLASSNAME);
   loginBtn.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username);
   toDoForm.classList.remove(HIDDEN_CLASSNAME);

}

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   paintGreetings(savedUsername);
   loginHello.classList.add(HIDDEN_CLASSNAME);
   loginInput.classList.add(HIDDEN_CLASSNAME);
   loginBtn.classList.add(HIDDEN_CLASSNAME);
   toDoForm.classList.remove(HIDDEN_CLASSNAME);
}