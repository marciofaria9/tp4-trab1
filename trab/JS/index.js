const alcool = {    
    produto: "Alcool em gel 500 ml",
    precos: {
        americanas: 13,
        magLuiza: 12,
        drogaRaia: 15,
        submarino: 13,
        carrefour: 12.5,
        ultraFarma: 15,
        extra: 12
    }
}

const divTest = document.querySelector(".div")
const p = document.createElement("p");


divTest.insertAdjacentHTML("beforeend", p)

