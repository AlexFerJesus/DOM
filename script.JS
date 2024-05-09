console.log("Olá mundo!");

const botao = document.getElementById("BotaoF");

console.log(botao);

botao.addEventListener('click', () => alert("Fui Criado!!!"));
botao.addEventListener('click', () => { 
    alert ("Assédio");
});

const divs = document.getElementsByTagName("div");
divs.forEach((item, key) => {
    item.addEventListener("Click", () => {
        alert("click na div" + key);
    });
});

const qualBotao = (evt) => {
    alert('Você clicou em "${evt.correntTarget.textContent}"');
}

const botoes = document.getElementsByTagName("div");
divs.forEach(botao => {
    botao.addEventListener("click", qualBotao);
});