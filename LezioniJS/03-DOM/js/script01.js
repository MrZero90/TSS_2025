// Sintassi CSS
/**
 * # id
 * . class
 * nomeTag = nomeTag
 */

// Quert Selector restituisce sempre un solo elemento, solo il primo che trova

// let lista = document.querySelector("#lista") // ul inclusi i figli
// console.log(lista);

let li3 = document.querySelector("#tre");
console.log(li3);
// se volessi leggere il testo contenuto in li3
console.log(li3.textContent);

// uso un selettore tag per recuperare la lista
let lista = document.querySelector("ul");

// cerca un ul con classe sezLibri
let listaLibri = document.querySelector("ul.sezLibri")

// voglio recuperare più elementi contemporaneamente
// uso query selector all, che genera una NodeList (parente degli array)
let lis = document.querySelectorAll("li");
console.log(lis);

// i li dentro l'elemento con id="lista"
let lisSpesa = document.querySelectorAll("#lista li");
console.log(lisSpesa);

// i li dentro l'elemento con class="sezLibri"
let lisLibri = document.querySelectorAll(".sezLibri li");
console.log(lisLibri);

let lisAlbum = document.querySelectorAll("li.txtAlb");
console.log(lisAlbum);

// leggo tutti gli album in lista
for (let i = 0; i < lisAlbum.length; i++) {
    console.log(lisAlbum[i].textContent);
}

// se quello che ricevo è una collection, non posso applicare un forEach, ma devo prima trasformarela in un array usando l'operatore ... (spread) 
[...lisAlbum].forEach(li => {
    console.log(li.textContent);
})

// esempio con nodeValue
let liDue = document.querySelector("li#due");
let liTesto = liDue.firstChild.nodeValue;
console.log(liTesto); //pasta

let liSei = document.querySelector("ul#lista").lastChild.textContent;
console.log(liSei);

// non tutti i browser si comportano bene quando si utilizza la proprieta children
let libriLis = document.querySelector("#listaLibri").children;
console.log(libriLis);

let colori = ["bianco", "rosso", "blu", "nero"];
let frutta = ["banana", "mela", "pesca", "anguria", "ciliegia"];
// se volessi fare di due array un singolo array, posso usare l'operatore spread
let nuovoArr = [...colori, ...frutta];
console.log(nuovoArr);

// se volessi aggiungere un elemento nel nuovo array
console.log("verde", ...nuovoArr);