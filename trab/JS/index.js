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



function adcElemento (variavel, variavel2, variavel3) {
 
  var div = document.createElement("div");
  var divInt = document.createElement("div")
  var divInt2 = document.createElement("div")
  var divInt3 = document.createElement("div")

  divInt.classList.add ("itenDiv")
  divInt2.classList.add ("itenDiv")
  divInt3.classList.add ("itenDiv")
  div.classList.add("itenProd")

  var conteudoNovo = document.createTextNode(variavel);
  var conteudoNovo1 = document.createTextNode(variavel2);
  var conteudoNovo2 = document.createTextNode (variavel3);

  divInt.appendChild(conteudoNovo);
  divInt2.appendChild(conteudoNovo1);
  divInt3.appendChild(conteudoNovo2);
  div.appendChild(divInt)
  div.appendChild(divInt2)
  div.appendChild(divInt3)
  var divAtual = document.querySelector(".div1");
  divAtual.insertAdjacentElement("beforeend", div);
}



function creatDiv (){
       
    for(var i = 0; i < 5; i++){
        adcElemento (alcoolGel[i].loja, alcoolGel[i].produto, alcoolGel[i].preco)
    }
    
    
}
creatDiv()