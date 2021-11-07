var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]

alcoolGel = [
    { loja: textLojas[0], produto: textMenu[0], preco: "R$ 22,25", linkProd: "https://www.americanas.com.br/produto/2811294049?sellerId=17256512000116&epar=bp_pl_00_go_smart_sup_teste01&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv5zRSkGyfyrUNLai0cKlI2mfhDfxlMux_eRIXl_NfwCU9PTRDT-QlAaAiVeEALw_wcB" },
    { loja: textLojas[1], produto: textMenu[0], preco: "R$ 15,90", linkProd: "https://www.carrefour.com.br/alcool-gel-antisseptico-70--neutro-500-ml-edumax-mp910135402/p" },
    { loja: textLojas[2], produto: textMenu[0], preco: "R$ 15,60", linkProd: "https://www.magazineluiza.com.br/alcool-em-gel-antisseptico-para-maos-70-aloe-vera-420g-1-un-asseptgel/p/ja90b47jbd/me/agmo/?&seller_id=gimba&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=54222&gclid=Cj0KCQjww4OMBhCUARIsAILndv52jg-v_Akn0dcCCznusfv_-JezzRoawSJh7imfmEbAwcPCnJsWuRQaAiV0EALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[0], preco: "R$ 12.90", linkProd: "https://www.amazon.com.br/Produto-corre%C3%A7%C3%A3o-Teste-comprar-Acess%C3%B3rios/dp/B07D7FS8GM/ref=sr_1_17?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=alcool+em+gel&qid=1635894467&sr=8-17" },
    { loja: textLojas[4], produto: textMenu[0], preco: "R$ 11,60", linkProd: "https://www.submarino.com.br/produto/13967655?pfm_carac=asseptgel&pfm_page=search&pfm_pos=grid&pfm_type=search_page" }
]
mascara = [
    { loja: textLojas[0], produto: textMenu[1], preco: "R$ 12,99", linkProd: "https://www.americanas.com.br/produto/2650286012?epar=bp_pl_00_go_bs_todas_geral_gmv&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv7py2X92Eik0ywa2IAh1YIbgU6QlmoJu6N9du07noDMqwn6PH0wO5waAktCEALw_wcB&cor=AZUL&cor%2Festampa=Azul-bebe" },
    { loja: textLojas[1], produto: textMenu[1], preco: " R$14,90", linkProd: "https://www.carrefour.com.br/mascara-3-camadas-descartavel-azul---caixa-com-50---hc400-hc400-mp912629859/p?utm_medium=sem&utm_source=google_pla_3p&utm_campaign=ticket_baixo&gclid=Cj0KCQjww4OMBhCUARIsAILndv5SIKs5Qc29o7NvDQqtkv3F-yLcCwO3PFB-1f6u3HJt4HTAfnjTIIcaAn2HEALw_wcB" },
    { loja: textLojas[2], produto: textMenu[1], preco: " R$12,40", linkProd: "https://www.magazineluiza.com.br/mascara-descartavel-tripla-50-unidades-azul-importada-chn/p/cjhg939b58/cp/asph/?&seller_id=mcardosocomercio&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61985&gclid=Cj0KCQjww4OMBhCUARIsAILndv4G8LbnAA8dckFNLd05BVyD1vjvw071czyjEePG20ru-pnoQEuQmlgaAiwvEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[1], preco: "R$ 13,85", linkProd: "https://www.magazineluiza.com.br/mascara-descartavel-tripla-50-unidades-azul-importada-chn/p/cjhg939b58/cp/asph/?&seller_id=mcardosocomercio&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61985&gclid=Cj0KCQjww4OMBhCUARIsAILndv4G8LbnAA8dckFNLd05BVyD1vjvw071czyjEePG20ru-pnoQEuQmlgaAiwvEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[4], produto: textMenu[1], preco: "R$ 13,90", linkProd: "https://www.submarino.com.br/produto/3203211035?sellerId=19785901000164&epar=bp_pl_00_go_g35167&epar=bp_pl_00_go_g35167&opn=XMLGOOGLE&WT.srch=1&utm_medium=buscappc&utm_source=google&utm_campaign=marca%3Asuba%3Bmidia%3Abuscappc%3Bformato%3Apla%3Bsubformato%3A00%3Bidcampanha%3Ag35167&gclid=Cj0KCQjww4OMBhCUARIsAILndv4ByjwxIo5SVjumDaZiCEe2KSVWQ_MgLNcIbErZHBlOphWFOLzBJ5UaAj8YEALw_wcB" }
]
sabao = [
    { loja: textLojas[0], produto: textMenu[2], preco: "R$ 4,99", linkProd: "https://www.americanas.com.br/produto/3496862682?epar=bp_pl_00_go_ab_todas_geral_gmv&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv4oyClf38ZUUhPvowHZOgXtGYVWNTQxbjZc64Z0DlpDyi-CG7JsnJkaAm_6EALw_wcB" },
    { loja: textLojas[1], produto: textMenu[2], preco: "R$ 10,38", linkProd: "https://www.carrefour.com.br/sabonete-liquido-palmolive-nutri-milk-250ml-mp912138151/p" },
    { loja: textLojas[2], produto: textMenu[2], preco: "R$ 5,99", linkProd: "https://www.magazineluiza.com.br/sabonete-liquido-hidratante-palmolive-nutri-milk-250ml/p/dd4ffc4gk6/me/coeb/?&seller_id=droganews&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61743&gclid=Cj0KCQjww4OMBhCUARIsAILndv40z0VYH6qH9r4cZt89JwPuRiGX0qPNGTWwQHyd3b6Ajs-Mgfr2DKUaAlWXEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[2], preco: "R$ 5,55", linkProd: "https://www.amazon.com.br/Sabonete-L%C3%ADquido-Hidratante-Nutrimilk-Palmolive/dp/B07G5XW7HT/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Nutri-Milk+250ml&qid=1635900845&sr=8-1" },
    { loja: textLojas[4], produto: textMenu[2], preco: "R$8,83", linkProd: "https://www.submarino.com.br/produto/1255711373?pfm_carac=nutri-milk-250ml&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&sabor=N%C3%A3o" }
]
protetor = [
    { loja: textLojas[0], produto: textMenu[3], preco: "R$ 12,5", linkProd: "https://www.americanas.com.br/produto/2218693031?pfm_carac=faceshield&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=5f809c011b186381b582638a" },
    { loja: textLojas[1], produto: textMenu[3], preco: "R$ 19,00", linkProd: "https://www.carrefour.com.br/mascara-facial-protetora-respingos-master-acrilico-mp908666871/p" },
    { loja: textLojas[2], produto: textMenu[3], preco: "R$ 14,50", linkProd: "https://www.magazineluiza.com.br/faceshield-protecao-facial-chn/p/cbh3f9hgg2/pi/epii/" },
    { loja: textLojas[3], produto: textMenu[3], preco: "R$ 13,98", linkProd: "https://www.amazon.com.br/Mascara-Prote%C3%A7%C3%A3o-Brinox-Branco-Trasnparente/dp/B089QQ4WF3/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=faceshield&qid=1635901907&sr=8-1" },
    { loja: textLojas[4], produto: textMenu[3], preco: "R$ 6,70", linkProd: "https://www.submarino.com.br/produto/3365758818?pfm_carac=faceshield&pfm_page=search&pfm_pos=grid&pfm_type=search_page" }
]
avental = [
    { loja: textLojas[0], produto: textMenu[4], preco: "R$ 49,99", linkProd: "https://www.americanas.com.br/produto/48336884?pfm_carac=avental-descartavel&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=5ed1377479bf8430cbcce6d6&cor=Branco" },
    { loja: textLojas[1], produto: textMenu[4], preco: "R$ 29,00", linkProd: "https://www.carrefour.com.br/avental-descartavel-tnt-manga-longa-gramatura-20-com-10-unidades-mp28663381/p" },
    { loja: textLojas[2], produto: textMenu[4], preco: "R$ 26,00", linkProd: "https://www.magazineluiza.com.br/avental-descartavel-c-manga-longa-branco-tnt-10-unidades-20g-chn/p/fjdc8h205h/ud/aven/?&seller_id=gcardosodistribuidora&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=54222&gclid=Cj0KCQjww4OMBhCUARIsAILndv4Vdew8JOBkz1smwCJk1wPH_NKSJ-RlemzWAVdXcb_NlHiJEUZSFiMaAn6dEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[4], preco: "R$ 45,00", linkProd: "https://www.amazon.com.br/Avental-Descart%C3%A1vel-Branco-Manga-unidades/dp/B08P3NJG3Z/ref=sr_1_4_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=avental+descartavel&qid=1635902662&sr=8-4-spons&psc=1&smid=A1KFB6U009LM8R&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRVEZWQkxMODk5WTgmZW5jcnlwdGVkSWQ9QTNNWkhPSFg2M01BNjgmZW5jcnlwdGVkQWRJZD1BMDk2Nzg1NTI3UjNaTTFBMzhYTkwmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl" },
    { loja: textLojas[4], produto: textMenu[4], preco: "R$ 47,49", linkProd: "https://www.submarino.com.br/produto/48336884?pfm_carac=avental-descartavel&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page&cor=Branco" }
]
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

    link.href = variavel4
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

    for (var i = 0; i < 5; i++) {
        adcElemento(mascara[i].loja, mascara[i].produto, mascara[i].preco, mascara[i].linkProd)
    }
    for (var i = 0; i < 5; i++) {
        adcElemento(sabao[i].loja, sabao[i].produto, sabao[i].preco, sabao[i].linkProd)
    }
    for (var i = 0; i < 5; i++) {
        adcElemento(protetor[i].loja, protetor[i].produto, protetor[i].preco, protetor[i].linkProd)
    }
    for (var i = 0; i < 5; i++) {
        adcElemento(avental[i].loja, avental[i].produto, avental[i].preco, avental[i].linkProd)
    }
    for (var i = 0; i < 5; i++) {
        adcElemento(gorro[i].loja, gorro[i].produto, gorro[i].preco, gorro[i].linkProd)
    }


}

creatDiv()