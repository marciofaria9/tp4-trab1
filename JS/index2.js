var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]

alcoolGel = [
    { loja: textLojas[0], produto: textMenu[0], preco: "R$ 21,13", linkProd: "https://www.americanas.com.br/produto/2811294049?sellerId=17256512000116&epar=bp_pl_00_go_smart_sup_teste01&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv5zRSkGyfyrUNLai0cKlI2mfhDfxlMux_eRIXl_NfwCU9PTRDT-QlAaAiVeEALw_wcB" },
    { loja: textLojas[1], produto: textMenu[0], preco: "R$ 15,90", linkProd: "https://www.carrefour.com.br/alcool-gel-antisseptico-70--neutro-500-ml-edumax-mp910135402/p" },
    { loja: textLojas[2], produto: textMenu[0], preco: "R$ 15,60", linkProd: "https://www.magazineluiza.com.br/alcool-em-gel-antisseptico-para-maos-70-aloe-vera-420g-1-un-asseptgel/p/ja90b47jbd/me/agmo/?&seller_id=gimba&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=54222&gclid=Cj0KCQjww4OMBhCUARIsAILndv52jg-v_Akn0dcCCznusfv_-JezzRoawSJh7imfmEbAwcPCnJsWuRQaAiV0EALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[0], preco: "R$ 14,08", linkProd: "https://www.amazon.com.br/Produto-corre%C3%A7%C3%A3o-Teste-comprar-Acess%C3%B3rios/dp/B07D7FS8GM/ref=sr_1_17?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=alcool+em+gel&qid=1635894467&sr=8-17" },
    { loja: textLojas[4], produto: textMenu[0], preco: "R$ 11,60", linkProd: "https://www.submarino.com.br/produto/13967655?pfm_carac=asseptgel&pfm_page=search&pfm_pos=grid&pfm_type=search_page" }
]



function adcElemento(variavel, variavel2, variavel3, variavel4) {
    var link = document.createElement('a')
    var div = document.createElement("div");
    var divInt = document.createElement("div")
    var divInt2 = document.createElement("div")
    var divInt3 = document.createElement("div")
    var img = document.createElement("img")
    img.src = "../images/img-Alcool.jpg"
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
        adcElemento(alcoolGel[i].loja, alcoolGel[i].produto, alcoolGel[i].preco, alcoolGel[i].linkProd)
    }

}
creatDiv()