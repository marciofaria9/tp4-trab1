var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]

protetor = [
    { loja: textLojas[0], produto: textMenu[3], preco: "R$ 6,70", linkProd: "https://www.americanas.com.br/produto/3365758818?pfm_carac=faceshield&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=60ba47e352131c3c812b1802" },
    { loja: textLojas[1], produto: textMenu[3], preco: "R$ 19,00", linkProd: "https://www.carrefour.com.br/mascara-facial-protetora-respingos-master-acrilico-mp908666871/p" },
    { loja: textLojas[2], produto: textMenu[3], preco: "R$ 4,50", linkProd: "https://www.magazineluiza.com.br/faceshield-protecao-facial-chn/p/cbh3f9hgg2/pi/epii/" },
    { loja: textLojas[3], produto: textMenu[3], preco: "R$ 9,99", linkProd: "https://www.amazon.com.br/Mascara-Prote%C3%A7%C3%A3o-Brinox-Branco-Trasnparente/dp/B089QQ4WF3/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=faceshield&qid=1635901907&sr=8-1" },
    { loja: textLojas[4], produto: textMenu[3], preco: "R$ 6,70", linkProd: "https://www.submarino.com.br/produto/3365758818?pfm_carac=faceshield&pfm_page=search&pfm_pos=grid&pfm_type=search_page" }
]



function adcElemento(variavel, variavel2, variavel3, variavel4) {
    var link = document.createElement('a')
    var div = document.createElement("div");
    var divInt = document.createElement("div")
    var divInt2 = document.createElement("div")
    var divInt3 = document.createElement("div")
    var img = document.createElement("img")
    img.src = "../images/faceshield.jpg"
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
        adcElemento(protetor[i].loja, protetor[i].produto, protetor[i].preco, protetor[i].linkProd)
    }

}
creatDiv()