//Fução para pegar o texto da textarea

function getTextCriptografado() {
    var campoTexto = document.getElementById("main-text");
    var btnCryptography = document.querySelector(".btn-primary");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = criptografaTexto(campoTexto.value);
        console.log(textoCriptografado);
    })
}

function getTextDescriptografado() {
    var campoTexto = document.getElementById("main-text");
    var btnCryptography = document.querySelector(".btn-outline");

    btnCryptography.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = descriptografaTexto(campoTexto.value);
        console.log(textoCriptografado);
    })
}

getTextCriptografado();
getTextDescriptografado();