let pesoPeca=130;
let listaQtdPecas=9;
let nomePeca="PC";

if (pesoPeca >= 100){
    console.log("Peça dentro do peso de cadastro");
}else {
    console.log("Peça com peso insuficiente");
}

if (listaQtdPecas >= 10){
    console.log("Atingiu a capacidade maxima da caixa")
}else {
    console.log("A caixa ainda tem capacidade para mais peças")
}

if (nomePeca.length < 3 ){
    console.log("A peça não atende o requisito do nome")
}else {
    console.log("Peça Cadastrada")
}