console.log("Ciao Claudio, sei nella console");

// Dichiaro una variabile
let mioNome = "Dario";
let miaEta = 36;
let presenza = true;
var corso = "TSPPI"
let litriAcqua = 0.75;

console.log("Il tipo della variabile mioNome è: ", typeof(mioNome));
console.log("Il tipo della variabile miaEta è: ", typeof(miaEta));
console.log("Il tipo della variabile litriAcqua è: ", typeof(litriAcqua));

// Concateno delle stringhe
console.log("Ciao " + mioNome + " hai " + miaEta + " anni. Insegni nel corso di " + corso);

// per inserire i backtick automaticamente basta utilizzare ${} all'interno dei ""... li trasformerà automaticamente  in ``
console.log(`Ciao ${mioNome} hai ${miaEta} anni`);

// ESEMPIO CON I TIPI
let num1 = 10;
let num2 = 5;
console.log("La somma vale " + num1 + num2)

let num3 = "25";
let num4 = "6";

let somma = Number(num3) + Number(num4);
let prodotto = num3 * num4;
let differenza = num3 - num4;
let quoziente = num3 / num4;

console.log(somma);
console.log(prodotto);
console.log(differenza);
console.log(quoziente);

let numeroCas = window.prompt("Inserisci un numero");
console.log(typeof numeroCas);


let mioNumero = 50;
let somma2 = Number(numeroCas) + mioNumero;
console.log(somma2);

//Array sono molto simili alla collection ArrayList di JAVA

let studenti = ["Claudio", "Vania", "Ludovica", "Andrea", "Glenda", "Edoardo", "Nicolò", "Sahar", "Ivan", "Jacopo", 4, true];

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i]);
}

studenti.forEach(studente => {
    console.log(studente);
});

for (const studente of studenti) {
    console.log(studente);
}

// anche qui ho proprietà e metodi legati all'oggetto Array

studenti.push("Dario");
studenti.sort().reverse();
studenti.pop(); // elimina ultimo elemento
studenti.shift(); // elimina primo elemento

studenti.splice(2,5);// inizia dall'indice 2, ed elimina 5 elementi...questo non modifica l0array originale
let studentiEstratti = studenti.slice(2,5);
console.log(studenti);
console.log(studentiEstratti);

// Metodo per cercare elementi
console.log(studenti.indexOf("Claudio")); //prima occorrenza
console.log(studenti.lastIndexOf("Claudio")); //ultima occorrenza

// Metodo filter
let filtro = studenti.filter(mioNome => mioNome.length > 6); //questo restituisce un array
console.log(filtro);

let find = studenti.find(nome => nome.length > 6); //questo restituisce un singolo elemento
console.log(find);

let parole = ["Ciao", "Smartphone", "Mare", "Spiaggia", "Sole"];
console.log(parole.join("_"));