class Viaggio{
    constructor(id, destinazione, prezzo, immagine, disponibilita){
        this.id = id;
        this.destinazione  = destinazione;
        this.prezzo = prezzo;
        this.immagine = immagine;
        this. disponibilita = disponibilita;
    }
}

let home = document.querySelector("#home");
home.addEventListener("click", getViaggi);
let showroom = document.querySelector("#showroom");


function getViaggi(){
    const url = "http://localhost:3000/viaggi";
    try {
        fetch(url)
        .then(data => {
            // inserire qui regole dicontrollo
            return data.json();
        })
        .then(response => {
            // response è un array di 10 oggetti
            console.log(response);
            showroom.innerHTML = "";
            response.forEach(viaggio => {
                showroom.appendChild(creaShowroomCard(viaggio));
            });
        })
        
    } catch (error) {
        console.log("Errore nella fetch: ", error);
    }
}

/**
 * 
 * @param {Viaggio} viaggio 
 */
function creaShowroomCard(viaggio){

    let card = document.createElement("div");
    card.setAttribute("class", "col-4");

    let innerCard = document.createElement("div");
    innerCard.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", viaggio.immagine);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.textContent = viaggio.destinazione;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.textContent = `€ ${viaggio.prezzo}`;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.textContent = `disponibilità: ${viaggio.disponibilita}`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Compra Ora"
    if(!viaggio.disponibilita){
        btn.setAttribute("disabled", true);
    }
    btn.addEventListener("click", function(){
        addInCarrello(viaggio);
    })

    cardBody.appendChild(h4);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);
    cardBody.appendChild(btn);

    innerCard.appendChild(img);
    innerCard.appendChild(cardBody);

    card.appendChild(innerCard);

    return card;
}

/**
 * 
 * @param {Viaggio} viaggio 
 */
function addInCarrello(viaggio){
    const URL = "http://localhost:3000/carrello";

    // uso la fetch con il metodo post per registrare un viaggio nel carrello
    fetch(URL,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        // dentro il body passo l'oggetto formato json (string) che voglio registrare
        body: JSON.stringify(viaggio)
    })
    .then(data => {
        console.log(data);
    })

}

function creaCarrelloCard(viaggio){

    let card = document.createElement("div");
    card.setAttribute("class", "col-4");

    let innerCard = document.createElement("div");
    innerCard.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("src", viaggio.immagine);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");
    h4.textContent = viaggio.destinazione;

    let p1 = document.createElement("p");
    p1.setAttribute("class", "card-text");
    p1.textContent = `€ ${viaggio.prezzo}`;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "card-text");
    p2.textContent = `disponibilità: ${viaggio.disponibilita}`;

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Rimuovi"
    btn.addEventListener("click", function(){
        removeFromCarrello(viaggio);
    })

    cardBody.appendChild(h4);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);
    cardBody.appendChild(btn);

    innerCard.appendChild(img);
    innerCard.appendChild(cardBody);

    card.appendChild(innerCard);

    return card;
}

function removeFromCarrello(viaggio){
    const URL = `http://localhost:3000/carrello/${viaggio.id}`;
    fetch(URL, {
        method: "DELETE"
    })
    .then(data => {
        console.log(data);
    })

}

let carrello = document.querySelector("#carrello");
carrello.addEventListener("click", getCarrello);
function getCarrello(){
    const URL = "http://localhost:3000/carrello";
    try {
        fetch(URL)
        .then(data => {
            // inserire qui regole dicontrollo
            return data.json();
        })
        .then(response => {
            // response è un array di 10 oggetti
            console.log(response);
            showroom.innerHTML = "";
            response.forEach(viaggio => {
                showroom.appendChild(creaCarrelloCard(viaggio));
            });
        })
        
    } catch (error) {
        console.log("Errore nella fetch: ", error);
    }
}




document.addEventListener("DOMContentLoaded", getViaggi);