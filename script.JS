const iniciar => () => {
    console.log("antes do fetch")

    const response =  fetch ('https://github.com/AlexFerJesus')
        .then((response) => response.json())
        .then((dados) => exibeUsuario)

    console.log("depois do fetch");
}

document.addEventListener("DOMContentLoaded", iniciar);