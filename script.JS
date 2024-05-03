// //Primeira Parte
// console.log("Funciona!");

// window.console.log("Pelo Window");
// console.log(window.location.href);
// console.log(window.navigator.languages);
// console.log(window.navigator.platform);
// console.log(window.navigator.userAgent);

// console.log(window.screen.width);
// console.log(window.screen.height);

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// let titulo = document.body.children[0];
// console.log(titulo);

// let lista = document.body.children[1];
// console.log(lista);

// console.log(lista.firstElementChild);
// console.log(lista.lastElementChild);
// console.log(lista.parentElement);

// console.log(document.getElementById("listinha"));
// console.log(document.getElementById("item01"));

// console.log(document.querySelectorAll(".ordenada"));
// console.log(document.querySelector("#item01"));

//Segunda Parte
// console.log(document.querySelectorAll(".ordenada"));
// console.log(document.querySelector("#"));

// console.log(document.querySelector("ordenada").matches(".ordenada"));

// let lista = document.querySelector(".ordenada");

// console.log(lista.matches("#listinha"));

// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByClassName("ordenada"));

// let titulo = document.getElementById("titulo");
// titulo.innerHTML = "<i>Mudei</i>"

// let logo = document.getElementsByTagName("img")[0];
// console.set(logo);
// logo.setAttribute("alt", "Logo da ETECAB");
// logo.removeAttribute("Alt");
// console.log(logo.getAttribute("alt"));

// titulo.classList.add("vermelho");
// titulo.classList.remove("vermelho");

// titulo.classList.add("roxo");
// titulo.classList.remove("roxo");

// let paragrafo = document.getElementById("paragrafo01");
// paragrafo.style.fontSize = "20px";
// paragrafo.style.color = "green";
// paragrafo.style.marginLeft = "100px";

// criando elementos pelo js
let titulo02 = document.createElement("h2");
titulo02.innerText = "kueizy kueizy kueizy";

let paragrafo = document.getElementById("base");
paragrafo.append(titulo02);
paragrafo.prepend(titulo02);

paragrafo.before(titulo02);
paragrafo.after(titulo02);

titulo02.remove();

// Exemplo Lista
let terefas = document.getElementById("terefas");

let item = document.createElement("li");
item.innerText = "chegar no horário da aula";

tarefa.append(item);


// let var01 = "Nada";

// function nada() {
//     let var01 = "Nada";
//     let var02 = ""
// }
