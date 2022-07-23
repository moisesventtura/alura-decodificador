function copiarTexto() {
    let textoCopiado = document.querySelector(".texto-criptografado p");
    var btnCopy = document.querySelector("#copiar");
    btnCopy.addEventListener("click", function (event) {
        event.preventDefault();
        navigator.clipboard.writeText(textoCopiado.innerText);

    })

}

copiarTexto();