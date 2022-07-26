function getTextCriptografado() {
    var campoTexto = document.getElementById("main-text");
    var btnCryptography = document.querySelector("#criptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = criptografaTexto(campoTexto.value);

        var noMessage = document.querySelector(".no-message-feedback");
        noMessage.classList.add("d-none");

        var textTeste = document.querySelector(".texto-criptografado");
        textTeste.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        var minusculas = textoCriptografado.toLowerCase();

        if (textoCriptografado === minusculas) {
            paragrafo.textContent = textoCriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}

getTextCriptografado();

function getTextDescriptografado() {
    var campoTexto = document.getElementById("main-text");
    var btnCryptography = document.querySelector("#descriptografar");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoDescriptografado = descriptografaTexto(campoTexto.value);

        var noMessage = document.querySelector(".no-message-feedback");
        noMessage.classList.add("d-none");

        var textTeste = document.querySelector(".texto-criptografado");
        textTeste.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto-criptografado p");

        var minusculas = textoDescriptografado.toLowerCase();

        if (textoDescriptografado === minusculas) {
            paragrafo.textContent = textoDescriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    })
}


getTextDescriptografado();