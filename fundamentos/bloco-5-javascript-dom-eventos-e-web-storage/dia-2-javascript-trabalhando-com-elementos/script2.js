console.log(document.getElementById('elementoOndeVoceEsta'))

function alteraCor(elemento, cor) {
    document.getElementById(elemento).parentNode.style.backgroundColor = cor;
}

alteraCor('#elementoOndeVoceEsta', 'blue');