let risultati= document.getElementById("risultati");
let btnSomma = document.getElementById("btnSomma");
let btnProd = document.getElementById("btnProd");
let btnCalcola = document.getElementById("btnCalcola");


function somma(num1, num2){
    let somma = num1 + num2;
    risultati.innerHTML += `<h4>${somma}</h4>`;
    return somma;
}

function prodotto(num1, num2){
    let prod = num1 * num2;
    return prod;
}

function calcolaTutto(num1, num2){
    somma(num1, num2);
    risultati.innerHTML += "<h4>" + prodotto(num1, num2) + "</h4>";
}

// Variabili globali
let mioNum = 5;
let tuoNum = 12.54;

// Questa che passo all'eventListener è una funzione anonima
btnSomma.addEventListener("click", function(){
    somma(mioNum, tuoNum);
})

btnProd.addEventListener("click", function(){
    let valoreProd = prodotto(mioNum, tuoNum);
    risultati.innerHTML += `<h4>Il prodotto vale: ${valoreProd}</h4>`;
})

btnCalcola.addEventListener("click", function(){
    calcolaTutto(mioNum,tuoNum);
})
