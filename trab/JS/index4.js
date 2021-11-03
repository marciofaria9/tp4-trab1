var textLojas = ["Americanas", "Carrefour", "Magazine Luiza", "Amazon", "Submarino"]
var textMenu = ["Alcool em gel 500 ml", "Máscara", "Sabão Antiséptico",
    "Protetor Facial", "Avental", "Gorro"]


sabao = [
    { loja: textLojas[0], produto: textMenu[2], preco: "R$ 4,99", linkProd: "https://www.americanas.com.br/produto/3496862682?epar=bp_pl_00_go_ab_todas_geral_gmv&opn=YSMESP&WT.srch=1&gclid=Cj0KCQjww4OMBhCUARIsAILndv4oyClf38ZUUhPvowHZOgXtGYVWNTQxbjZc64Z0DlpDyi-CG7JsnJkaAm_6EALw_wcB" },
    { loja: textLojas[1], produto: textMenu[2], preco: "R$ 10,38", linkProd: "https://www.carrefour.com.br/sabonete-liquido-palmolive-nutri-milk-250ml-mp912138151/p" },
    { loja: textLojas[2], produto: textMenu[2], preco: "R$ 5,99", linkProd: "https://www.magazineluiza.com.br/sabonete-liquido-hidratante-palmolive-nutri-milk-250ml/p/dd4ffc4gk6/me/coeb/?&seller_id=droganews&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=61743&gclid=Cj0KCQjww4OMBhCUARIsAILndv40z0VYH6qH9r4cZt89JwPuRiGX0qPNGTWwQHyd3b6Ajs-Mgfr2DKUaAlWXEALw_wcB&gclsrc=aw.ds" },
    { loja: textLojas[3], produto: textMenu[2], preco: "R$ 5,55", linkProd: "https://www.amazon.com.br/Sabonete-L%C3%ADquido-Hidratante-Nutrimilk-Palmolive/dp/B07G5XW7HT/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=Nutri-Milk+250ml&qid=1635900845&sr=8-1" },
    { loja: textLojas[4], produto: textMenu[2], preco: "R$8,83", linkProd: "https://www.submarino.com.br/produto/1255711373?pfm_carac=nutri-milk-250ml&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&sabor=N%C3%A3o" }
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
        adcElemento(sabao[i].loja, sabao[i].produto, sabao[i].preco, sabao[i].linkProd)
    }

}
creatDiv()