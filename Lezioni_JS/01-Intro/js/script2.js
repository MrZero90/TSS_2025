let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edoardo", "Nicolò", "Sahar", "Ivan", "Jacopo"];

//Stampare i nomi all'interno del div in una lista li
//1. recupero la porzione di html sulla quale voglio lavorare
let demo = document.getElementById("demo");
console.log(demo)

//Con innerHTML cambio la proprietà del testo al suo interno. Praticamente leggo e scrivo testo + html con questa proprietà
for (let i = 0; i < studenti.length; i++){
    demo.innerHTML += `<li>${studenti[i]}</li>`;
}

let docenti = ["Dario", "Oscar", "Luca", "Roberto", "Egle"]
let listaDoc = document.getElementById("listaDoc");
// docenti.forEach(docente => {
//     if(docente == "Dario"){
//         listaDoc.innerHTML += `<li class="txtRed">${docente}</li>`;
//     } else{
//     listaDoc.innerHTML += `<li class="txtBlue">${docente}</li>`;
//     }
// });

for (let i = 0; i < docenti.length; i++) {
    if(i % 2 == 0){
        listaDoc.innerHTML += `<li class="txtRed">${i}</li>`;
    } else{
        listaDoc.innerHTML += `<li class="txtBlue">${i}</li>`;
    } 
}

let fotoGruppo = document.getElementById("fotoGruppo");
//Brutto esempio
// fotoGruppo.innerHTML = "<img src='./assets/img/foto.webp' alt='foto di gruppo' title='foto di gruppo'>"

//miglior esempio
let img = document.createElement("img");
img.setAttribute("src", "./assets/img/foto.webp");
img.setAttribute("title", "foto di gruppo");
img.setAttribute("class", "dimImg");

fotoGruppo.appendChild(img)