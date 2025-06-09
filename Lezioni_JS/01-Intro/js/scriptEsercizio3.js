let campi = ["Nome", "Prezzo", "Quantità", "Subtotale"];

let pasta = ["Pasta", 0.9, 3, 2.7];
let mele = ["Mele", 1.2, 8, 9.6];
let fragole = ["Fragole", 4, 1, 4];
let cozze = ["Cozze", 18, 2, 36];

let spesa = [pasta, mele, fragole, cozze];

let listaCampi = document.getElementById("listaCampi");
campi.forEach(element => {
    listaCampi.innerHTML += `<th>${element}</th>`;
    console.log(`<th>${element}</th>`);    
});

let listaSpesa = document.getElementById("listaSpesa");
for (let i = 0; i < spesa.length; i++) {
    let tablerow = document.createElement("tr");
    tablerow.setAttribute("class","items");
    listaSpesa.appendChild(tablerow);
    itemsRow = document.getElementsByClassName("items")[i];

    spesa[i].forEach(element => {
        itemsRow.innerHTML += `<td>${element}</td>`
    });
}

let totaleSpesa = document.getElementById("totaleSpesa");
let totale = 0;
spesa.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        if(i == element.lastIndexOf){
            totale += element[i];
        }
    }
});
totaleSpesa.innerHTML += `<h2>${totale}</h2>`