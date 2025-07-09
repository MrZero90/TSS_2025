let miaVarGlobale = 42;

// usa variabile globale
function primaFunz(){
    console.log(miaVarGlobale);
}

// usa variabile locale
function secondaFunz(){
    let miaVarLocale = 56;
    console.log(miaVarLocale);
}

let numero = 100;
function terzaFunzione(){
    // posso ridefinire una variabile con lo stesso nome della globale e ha precedenza su di essa.
    let numero = 22; 
    console.log(numero);
}

// CLOSURE - "imita il funzionamento dell'incapsulamento presente nativamente in Java"
// regole - quando definisco una funzione internamente ad un'altra, la funzione più interna può accedere a:
/**
 * - var locale
 * - parametri della funzione esterna
 * - variabili funzione esterna
 * - var globali
 * 
 * l'accesso a queste proprietà resta vivo anche quando la funzione più esterna ha terminato l'esecuzione
 */

function creaContatore(){
    // var locale "implicitamente private"
    let cont = 0;

    return function(){
        cont ++;
        return cont;
    }
}

let valore1 = creaContatore();
console.log(valore1()); // 1

// variabile funzionale, contiene una funzione che ritorna un valore
let valore2 = creaContatore();
console.log(valore2()); //1
console.log(valore2()); //2
console.log(valore2()); //3

// senza closure
function contatoreSenzaClosure(){
    let cont = 0;
    cont++;
    return cont;
}

let valoreSenza1 = contatoreSenzaClosure();
console.log(valoreSenza1); //1
console.log(valoreSenza1); //1
console.log(valoreSenza1); //1

// calcolatrice con closure
function calcolatrice(){
    let risultato = 0;

    // mi faccio restituire multiple funzioni anonime
    // return seguito da parentesi graffe, significa che sto ritornando un oggetto
    return {
        aggiungi: function(n){
            risultato += n;
            return this;
        },
        sottrai: function(n){
            risultato -= n;
            return this;
        },
        dividi: function(n){
            risultato = (risultato/n);
            return this;
        },
        moltiplica: function(n){
            risultato *= n;
            return this; 
        },
        getResult: function(){
            return risultato;
        }
    }
}

let calc = calcolatrice();
let risultatoFinale = calc.aggiungi(10).moltiplica(3).sottrai(8).getResult();
console.log(risultatoFinale);

risultatoFinale = calc.aggiungi(10).getResult();
console.log(risultatoFinale);

// non posso arrivare a risultato se non attraverso un metodo