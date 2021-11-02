var textMenu = ["Alcool em gel 500 ml","Máscara", "Sabão Antiséptico",
 "Protetor Facial", "Avental", "Gorro"]
var textLojas = ["Americanas", "Ultra Farma","Magazine Luiza","Droga Raia", "Submarino"]

alcoolGel = [
    {loja: textLojas [0], produto: textMenu[0], preco: 15},
    {loja: textLojas [1], produto: textMenu[0], preco: 15},
    {loja: textLojas [2], produto: textMenu[0], preco: 15},
    {loja: textLojas [3],  produto: textMenu[0] , preco: 15},
    {loja: textLojas [4], produto: textMenu[0], preco: 15}
]
mascara = [
    {loja: textLojas [0], produto: textMenu[1], preco: 15},
    {loja: textLojas [1], produto: textMenu[1], preco: 15},
    {loja: textLojas [2], produto: textMenu[1], preco: 15},
    {loja: textLojas [3],  produto: textMenu[1] , preco: 15},
    {loja: textLojas [4], produto: textMenu[1], preco: 15}
]
sabao = [
    {loja: textLojas [0], produto: textMenu[2], preco: 15},
    {loja: textLojas [1], produto: textMenu[2], preco: 15},
    {loja: textLojas [2], produto: textMenu[2], preco: 15},
    {loja: textLojas [3],  produto: textMenu[2] , preco: 15},
    {loja: textLojas [4], produto: textMenu[2], preco: 15}
]
protetor = [
    {loja: textLojas [0], produto: textMenu[3], preco: 15},
    {loja: textLojas [1], produto: textMenu[3], preco: 15},
    {loja: textLojas [2], produto: textMenu[3], preco: 15},
    {loja: textLojas [3],  produto: textMenu[3] , preco: 15},
    {loja: textLojas [4], produto: textMenu[3], preco: 15}
]
avental = [
    {loja: textLojas [0], produto: textMenu[4], preco: 15},
    {loja: textLojas [1], produto: textMenu[4], preco: 15},
    {loja: textLojas [2], produto: textMenu[4], preco: 15},
    {loja: textLojas [3],  produto: textMenu[4] , preco: 15},
    {loja: textLojas [4], produto: textMenu[4], preco: 15}
]
gorro = [
    {loja: textLojas [0], produto: textMenu[5], preco: 15},
    {loja: textLojas [1], produto: textMenu[5], preco: 15},
    {loja: textLojas [2], produto: textMenu[5], preco: 15},
    {loja: textLojas [3],  produto: textMenu[5] , preco: 15},
    {loja: textLojas [4], produto: textMenu[5], preco: 15}
]



function adcElemento (variavel) {
  
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode(variavel);
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
  var divAtual = document.getElementById("div1");
  document.body.insertAdjacentElement("beforeend", divNova);
}

for(var i = 0; i < 5; i++){
    console.log(alcoolGel[i])
    console.log(mascara[i])
    console.log(sabao[i])
    console.log(protetor[i])
    console.log(avental[i])
    console.log(gorro[i])
    
    
}