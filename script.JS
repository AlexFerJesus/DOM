const removeErro = (evt) => {
    evt.currentTarget.classList.remove("Invalido");
}

const processarForm = (evt) => {
    evt.preventDefalt();

    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const repetesenha = document.getElementById("repetesenha");
    const cidade = document.getElementById("cidade");
    const deacordo = document.getElementById("deacordo");

    if (usuario.value.trim().length === 0) {
        usuario.classList.add("invalido");
        usuario.focus();
        return;
    }

    if (senha.value.trim().length < 8) {
        senha.classList.add("invalido");
        senha.focus();
        return;
    }

    if (repetesenha.value !== senha.value) {
        repetesenha.classList.add("invalido");
        repetesenha.focus();
        return;
    }
}