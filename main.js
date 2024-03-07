const textArea = document.querySelector('.text-area')
const listagem = document.querySelector('.listagem')

function changeView() {
    const textoEncriptado = cripto(textArea.value);
    listagem.value = textoEncriptado;
    textArea.value = "";
}

function cripto (textCripto) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    textCripto = textCripto.toLowerCase();

    for(let i = 0 ;i <matriz.length;i++){
        if(textCripto.includes(matriz[i][0])) {
            textCripto = textCripto.replaceAll(matriz[i][0],matriz[i][1])
        }
    }

    return textCripto
}

//Descriptar
function changeViewer() {
    const textDescripto = descripto(textArea.value);
    listagem.value = textDescripto;
    textArea.value = "";
}

function descripto (textDescripto) {
    let matriz2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    textDescripto = textDescripto.toLowerCase();

    for(let i = 0 ;i <matriz2.length;i++){
        if(textDescripto.includes(matriz2[i][0])) {
            textDescripto = textDescripto.replaceAll(matriz2[i][0],matriz2[i][1])
        }
    }

    return textDescripto
}

//copiar

function copiarTexto() {
    let textoCopiado = document.querySelector('.listagem');
    textoCopiado.select();
    document.execCommand("copy");
}