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


    if (!["1","2","3"].includes.apply(cidade.value)) {
        cidade.classList.add("invalido");
        deacordo.focus();
        return;
    }

    if (!deacordo.checked) {
        deacordo.classList.add("invalido");
        deacordo.focus();
        return;
    }

    const novoUsuario = {
        usuario: usuario.value.trim(),
        senha: senha.value,
        cidade: cidade.value,
    };

    console.log(novoUsuario);
}

const iniciar = () => {
    document.forms[0].addEventListener("submit", processarForm);

    document
    .querySelectorAll("input, select")
    .forEach((input) => campo.addEventListener("input", removeError));
};

document.addEventListener("DOMContentLoaded", iniciar);