const buttonDiminuir = document.querySelector("button#diminuir");
const buttonAumentar = document.querySelector("button#aumentar");
const buttonReset = document.querySelector("#resete");
const contadorElemento = document.querySelector("#contador");
const input = document.querySelector("#input");

buttonDiminuir.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);
  contadorElemento.textContent = valorAtual - 1;
  buttonDiminuir.classList.add("btn");
  buttonAumentar.classList.remove("btn");
});
buttonAumentar.addEventListener("click", () => {
  const valorAtual = Number(contadorElemento.textContent);
  contadorElemento.textContent = valorAtual + 1;
  buttonAumentar.classList.add("btn");
  buttonDiminuir.classList.remove("btn");
});
buttonReset.addEventListener("click", () => {
  contadorElemento.textContent = 0;
});
input.addEventListener("input", () => {
  console.log(input.value);
});

//Adicionando elementos inline:
contadorElemento.style.color = "red";
contadorElemento.style.paddind = "0 2rem";
contadorElemento.style.border = "1px solid #AAA";
contadorElemento.style.width = "150px";

//manipular classes usando JS

// console.log(buttonDiminuir.classList);
// buttonAumentar.classList.add("btn");
// buttonDiminuir.classList.remove("btn");

const buttonDarkTheme = document.querySelector(".themeD");
let DarkTheme = false;

window.onload = () => {};

buttonDarkTheme.addEventListener("click", () => {
  const body = document.querySelector("body");
  DarkTheme = !DarkTheme;
  localStorage.setItem("dark?", DarkTheme);

  if (!DarkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    buttonDarkTheme.classList.add("themeD");
    buttonDarkTheme.classList.remove("themeW");
  } else {
    body.style.backgroundColor = "white ";
    body.style.color = "black";
    buttonDarkTheme.classList.add("themeW");
    buttonDarkTheme.classList.remove("themeD");
  }
});
