class Torta{
    
    constructor(nome, prezzo, ingredienti, imgTorta){
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.dataScad = new Date();
        this.imgTorta = imgTorta;
        this.getScadenza();
    }

    getScadenza(){
        this.dataScad = this.dataScad.getDate() + 5;
        // return this.dataScad
    }
}

let torteInVendita = [
    new Torta(
        "Tiramisù",
        15.80,
        ["caffè", "mascarpone", "savoiardi", "cioccolato"],
        "./img/tiramisù.jpg"
    ),
    new Torta(
        "Foresta Nera",
        25.50,
        ["farina", "uova", "cioccolato fondente"],
        "./img/forestaNera.avif"
    ),
    new Torta(
        "Cheese Cake",
        18.40,
        ["biscotti", "formaggio", "fragole"],
        "./img/cheeseCake.webp"
    ),
];

let vetrinaTorte = document.getElementById("vetrinaTorte");

/**
 * 
 * @param {Torta} torta 
 */
function creaCard(torta){
    let ingredienti = "";
    torta.ingredienti.forEach(ingrediente =>{
        ingredienti += '<p class="card-text">' + ingrediente + '</p>';
    })

    // let card =  `<div class="card">
    //                 <img
    //                     class="card-img-top"
    //                     src='${torta.imgTorta}'
    //                     alt="Card image cap"
    //                 />
    //                 <div class="card-body">
    //                     <h4 class="card-title">${torta.nome}</h4>
    //                     <p class="card-text">${torta.ingredienti}</p>
    //                     <p class="card-text">${torta.dataScad}</p>
    //                 </div>
    //             </div>`

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = 
                `<img
                    class="card-img-top"
                    src='${torta.imgTorta}'
                    alt="Card image cap"
                />
                <div class="card-body">
                    <h4 class="card-title">${torta.nome}</h4>
                    ${ingredienti}
                    <p class="card-text">${torta.dataScad}</p>
                    <a
                        class="btn btn-primary"
                        href="#"
                        role="button"
                        >Compra</a
                    >
                    
                </div>`
    return card;
}

function sfornaTorte(){
    torteInVendita.forEach(torta=>{
        // vetrinaTorte.innerHTML += creaCard(torta);
        vetrinaTorte.appendChild(creaCard(torta))
    })
}
// Non consigliato
// sfornaTorte();

document.addEventListener("DOMContentLoaded", sfornaTorte);
