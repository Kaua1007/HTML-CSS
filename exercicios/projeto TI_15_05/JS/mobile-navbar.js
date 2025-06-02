var imgAtual = "./imagens/Carlo Ancelotti.png"
var imagemAnterior = "./imagens/senac.png"

function trocar () {
    document.getElementById('troca').scr = imgAtual;
    let aux = imgAtual
    imgAtual = imagemAnterior
    imagemAnterior = aux
}