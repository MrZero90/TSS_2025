// oggetti con costruttore
// vecchia versione
// function Studente(nome, cognome, eta, corsi, matricola, anno){
//     this.nome = nome;
//     this.cognome = cognome;
//     this.eta = eta;
//     this.corsi = corsi;
//     this.matricola = matricola;
//     this.anno = anno;

//     this.presentati = function(){
//         return `Ciao mi chiamo ${this.nome} ${this.cognome} e sono iscritto ai corsi di : ${this.corsi}`;
//     }
// }

// let mioStudente = new Studente("Laura", "Rossi", 30, ["Tss", "TPPW", "Sist"], 124, 2025);
// console.log(mioStudente.nome);
// console.log(mioStudente.presentati());

// nuova versione
class Studente {

    constructor(nome, cognome, eta, corsi, anno, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
        this.matricola = matricola;
        this.anno = anno;

        this.presentati = function () {
            let presentazione = `Ciao mi chiamo ${this.nome} ${this.cognome} e sono iscritto ai corsi di : ${this.corsi}.`;

            if (matricola == undefined){
                presentazione += `Matricola ${matricola}`;
            }
            return presentazione;
        }
    }
}



let tuoStudente = new Studente("Luigi", "Vacchia", 37, ["Tss", "TPPW", "Sist"], 2025, 1);
console.log(tuoStudente.presentati());

// qui non sto passando la matricola
let altroStudente = new Studente("Marco", "Verdi", 32, ["Tss", "TPPW", "Sist"], 2025);
console.log(tuoStudente.presentati());

let corsoTSS = [
    new Studente("Claudio", "Currò", 31, ["Tss", "TPPW", "Sist"], 2025, 1),
    new Studente("Jacopo", "Magnago", 22, ["Tss", "TPPW", "Sist"], 2025, 2),
    new Studente("Vania", "Villanueva", 26, ["Tss", "TPPW", "Sist"], 2025, 3)
]

corsoTSS.forEach(studente=> {
    console.log(studente.presentati());
});

// forin creato per gli oggetti. Permette di ciclare su proprietà degli oggetti pur essendo quest'ultimi non Enumerable
for (const prop in tuoStudente) {
    console.log(tuoStudente[prop]);
    if(typeof tuoStudente[prop] != 'function'){
        console.log(tuoStudente[prop]);
    }
}

// notazione a parentesi quadre, la prop è scritta come una stringa
console.log(tuoStudente['nome']);