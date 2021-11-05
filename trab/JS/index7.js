var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]

gorro = [
    { loja: textLojas[0], produto: textMenu[5], preco: "R$ 26,90", linkProd: "https://www.americanas.com.br/produto/3354769132?pfm_carac=touca-descartavel&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=60b6a8b052131c3c813dba16" },
    { loja: textLojas[1], produto: textMenu[5], preco: "R$ 28,99", linkProd: "https://www.carrefour.com.br/touca-descartavel-sanfonada-tnt-com-100-unidades-mp911950886/p" },
    { loja: textLojas[2], produto: textMenu[5], preco: "R$ 10,99", linkProd: "https://www.carrefour.com.br/touca-descartavel-sanfonada-tnt-com-100-unidades-mp911950886/p" },
    { loja: textLojas[3], produto: textMenu[5], preco: "R$ 26,86", linkProd: "https://www.amazon.com.br/Descartavel-Culin%C3%A1rio-Est%C3%A9tico-Gastron%C3%B4mico-Unidades/dp/B08YF9HTKX/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=touca+descartavel&qid=1635903085&sr=8-1" },
    { loja: textLojas[4], produto: textMenu[5], preco: "R$ 15,20", linkProd: "https://www.submarino.com.br/produto/14881463?pfm_carac=touca-descartavel&pfm_index=4&pfm_page=search&pfm_pos=grid&pfm_type=search_page" }
]


function adcElemento(variavel, variavel2, variavel3, variavel4) {
    var link = document.createElement('a')
    var div = document.createElement("div");
    var divInt = document.createElement("div")
    var divInt2 = document.createElement("div")
    var divInt3 = document.createElement("div")
    var img = document.createElement("img")
    img.src = "../images/touca.jpg"
    img.classList.add("imgDivDentro")
    

    link.href = variavel4
    img.href = variavel4

    divInt.classList.add("itenDiv")
    divInt2.classList.add("itenDiv")
    divInt3.classList.add("itenDiv")
    div.classList.add("itenProd")

    link.classList.add("atext")

    var conteudoNovo = document.createTextNode(variavel);
    var conteudoNovo1 = document.createTextNode(variavel2);
    var conteudoNovo2 = document.createTextNode(variavel3);

    divInt.appendChild(conteudoNovo);
    divInt2.appendChild(conteudoNovo1);
    divInt3.appendChild(conteudoNovo2);
    div.appendChild(img)

    link.appendChild(img)
    link.appendChild(divInt)
    link.appendChild(divInt2)
    link.appendChild(divInt3)
    div.appendChild(link)



    var divAtual = document.querySelector(".div1");
    divAtual.insertAdjacentElement("beforeend", div);
}




function creatDiv() {

    for (var i = 0; i < 5; i++) {
        adcElemento(gorro[i].loja, gorro[i].produto, gorro[i].preco, gorro[i].linkProd)
    }

}
creatDiv()