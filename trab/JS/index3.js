var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]


mascara = [
    { loja: textLojas[0], produto: textMenu[1], preco: "R$ 12,99", linkProd: "https://www.americanas.com.br/produto/2650286012?epar=bp_pl_00_go_bs_todas_geral_gmv&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv7py2X92Eik0ywa2IAh1YIbgU6QlmoJu6N9du07noDMqwn6PH0wO5waAktCEALw_wcB&cor=AZUL&cor%2Festampa=Azul-bebe" },
    { loja: textLojas[1], produto: textMenu[1], preco: " R$14,90", linkProd: "https://www.carrefour.com.br/mascara-3-camadas-descartavel-azul---caixa-com-50---hc400-hc400-mp912629859/p?utm_medium=sem&utm_source=google_pla_3p&utm_campaign=ticket_baixo&gclid=Cj0KCQjww4OMBhCUARIsAILndv5SIKs5Qc29o7NvDQqtkv3F-yLcCwO3PFB-1f6u3HJt4HTAfnjTIIcaAn2HEALw_wcB" },
    { loja: textLojas[2], produto: textMenu[1], preco: " R$12,40", linkProd: "https://www.magazineluiza.com.br/mascara-descartavel-tripla-50-unidades-azul-importada-chn/p/cjhg939b58/cp/asph/?&seller_id=mcardosocomercio&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61985&gclid=Cj0KCQjww4OMBhCUARIsAILndv4G8LbnAA8dckFNLd05BVyD1vjvw071czyjEePG20ru-pnoQEuQmlgaAiwvEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[1], preco: "R$ 13,85", linkProd: "https://www.magazineluiza.com.br/mascara-descartavel-tripla-50-unidades-azul-importada-chn/p/cjhg939b58/cp/asph/?&seller_id=mcardosocomercio&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61985&gclid=Cj0KCQjww4OMBhCUARIsAILndv4G8LbnAA8dckFNLd05BVyD1vjvw071czyjEePG20ru-pnoQEuQmlgaAiwvEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[4], produto: textMenu[1], preco: "R$ 13,90", linkProd: "https://www.submarino.com.br/produto/3203211035?sellerId=19785901000164&epar=bp_pl_00_go_g35167&epar=bp_pl_00_go_g35167&opn=XMLGOOGLE&WT.srch=1&utm_medium=buscappc&utm_source=google&utm_campaign=marca%3Asuba%3Bmidia%3Abuscappc%3Bformato%3Apla%3Bsubformato%3A00%3Bidcampanha%3Ag35167&gclid=Cj0KCQjww4OMBhCUARIsAILndv4ByjwxIo5SVjumDaZiCEe2KSVWQ_MgLNcIbErZHBlOphWFOLzBJ5UaAj8YEALw_wcB" }
]


function adcElemento(variavel, variavel2, variavel3, variavel4) {
    var link = document.createElement('a')
    var div = document.createElement("div");
    var divInt = document.createElement("div")
    var divInt2 = document.createElement("div")
    var divInt3 = document.createElement("div")
    var img = document.createElement("img")
    img.src = "../images/img-avental.jpg"
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
        adcElemento(mascara[i].loja, mascara[i].produto, mascara[i].preco, mascara[i].linkProd)
    }
    
}
creatDiv()