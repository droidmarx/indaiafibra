const form = document.querySelector("form");
const loginBtn = document.querySelector("#login-btn");

const users = [
  { username: "Gui", password: "Marx" },
  { username: "Andre", password: "Levi" },
  { username: "Elvis", password: "Santos" },
  { username: "Robson", password: "Duarte" },
  { username: "Sergio", password: "Luiz" },
  { username: "Anderson", password: "Fernandes" },
  { username: "Adriano", password: "Fernandes" },
  { username: "Anderson", password: "Reis" },
{ username: "Jhonatan", password: "Lua" },
{ username: "Alexandre", password: "Doneda" },

  // adicionar mais usuarios
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  let authenticated = false;
  for (let user of users) {
    if (user.username === username && user.password === password) {
      authenticated = true;
      break;
    }
  }

  if (authenticated) {
    document.body.classList.add("blur");
    setTimeout(function () {
      window.location.href = "./portal.html";
    }, 500);

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);
  } else if (username === "" || password === "") {
    alert("Por favor, insira um nome de usuário e senha");
  } else {
    alert("Usuário ou senha incorretos");
    form.reset();
  }
});
