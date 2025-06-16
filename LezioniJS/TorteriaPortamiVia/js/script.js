class Torta {
    constructor(nome, prezzo, ingredienti, dataScadenza, imgTorta) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.ingredienti = ingredienti;
        this.dataScadenza = dataScadenza;
        this.imgTorta = imgTorta;
    }
}

let today = new Date();
let dataScadenza = new Date();
const giorniPerScadenza = 5;
dataScadenza.setDate(today.getDate() + giorniPerScadenza);

let laDeliziosa = new Torta('La Deliziosa', 27, ['Fragole', 'Panna', 'Pistacchio', 'Mandorle'], dataScadenza, './img/laDeliziosa.jpg');
let tortaDellaNonna = new Torta('La Torta della nonna', 23, ['Ricotta', 'Pinoli', 'Limone'], dataScadenza, './img/tortaDellaNonna.png');
let caffettosa = new Torta('La Caffettosa', 22, ['Cacao', 'Caffé', 'Mascarpone'], dataScadenza, './img/caffettosa.png');

let torteInVendita = [laDeliziosa, tortaDellaNonna, caffettosa]

let cardSection = document.getElementsByClassName('card-group');

for (let i = 0; i < cardSection.length; i++) {
    torteInVendita.forEach(torta => {
        
        let createCard = document.createElement('div');
        createCard.innerHTML = 
    `<img src="${torta.imgTorta}" class="card-img-top"  style = height:19rem alt="Un immagine di una torta deliziosa">
        <div class="card-body">
            <h5 class="card-title">${torta.nome}</h5>
            <p class="card-text">Una torta deliziosa
            </p>
            <ul class="list-group list-group-flush ingredienti-torta">
            </ul>
            <br>
            <a href="#" class="btn btn-primary">Compra ora</a>
        </div>`;
    createCard.setAttribute('class', 'card text-center col-sm-1 col-md-2 col-lg-3');
    
    cardSection[i].appendChild(createCard);
    })
};

let ulIngredientiTorta = document.getElementsByClassName('ingredienti-torta');
for (let i = 0; i < ulIngredientiTorta.length; i++) {
    const ulIngredienteTorta = ulIngredientiTorta[i];
        torteInVendita[i].ingredienti.forEach(ingrediente => {
        let singoloIngredienteTorta = document.createElement('li'); 
        singoloIngredienteTorta.innerHTML = `${ingrediente}`;
        singoloIngredienteTorta.setAttribute('class', 'list-group-item');
        ulIngredienteTorta.appendChild(singoloIngredienteTorta);
    });
};


