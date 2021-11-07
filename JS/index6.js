var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]

avental = [
    { loja: textLojas[0], produto: textMenu[4], preco: "R$ 49,99", linkProd: "https://www.americanas.com.br/produto/48336884?pfm_carac=avental-descartavel&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=5ed1377479bf8430cbcce6d6&cor=Branco" },
    { loja: textLojas[1], produto: textMenu[4], preco: "R$ 29,00", linkProd: "https://www.carrefour.com.br/avental-descartavel-tnt-manga-longa-gramatura-20-com-10-unidades-mp28663381/p" },
    { loja: textLojas[2], produto: textMenu[4], preco: "R$ 26,00", linkProd: "https://www.magazineluiza.com.br/avental-descartavel-c-manga-longa-branco-tnt-10-unidades-20g-chn/p/fjdc8h205h/ud/aven/?&seller_id=gcardosodistribuidora&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=54222&gclid=Cj0KCQjww4OMBhCUARIsAILndv4Vdew8JOBkz1smwCJk1wPH_NKSJ-RlemzWAVdXcb_NlHiJEUZSFiMaAn6dEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[4], preco: "R$ 45,00", linkProd: "https://www.amazon.com.br/Avental-Descart%C3%A1vel-Branco-Manga-unidades/dp/B08P3NJG3Z/ref=sr_1_4_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=avental+descartavel&qid=1635902662&sr=8-4-spons&psc=1&smid=A1KFB6U009LM8R&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFRVEZWQkxMODk5WTgmZW5jcnlwdGVkSWQ9QTNNWkhPSFg2M01BNjgmZW5jcnlwdGVkQWRJZD1BMDk2Nzg1NTI3UjNaTTFBMzhYTkwmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl" },
    { loja: textLojas[4], produto: textMenu[4], preco: "R$ 47,49", linkProd: "https://www.submarino.com.br/produto/48336884?pfm_carac=avental-descartavel&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page&cor=Branco" }
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
        adcElemento(avental[i].loja, avental[i].produto, avental[i].preco, avental[i].linkProd)
    }

}
creatDiv()