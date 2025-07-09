class Studente {

    constructor(nome, cognome, corso){
        this.nome = nome;
        this.cognome = cognome;
        this.corso = corso;
    }

    studia() {
    console.log("Sto studiando...")
    }
}

let studente = new Studente("Laura", "Verdi", "Sviluppo App");

studente.studia();
// trasformo in un JSON e salvo in local o session storage, "Key", "Value"
localStorage.setItem("studente", JSON.stringify(studente));

// recupero lo studente dalla localStorage
// sto recuperando una string
let studenteConnesso = JSON.parse(localStorage.getItem("studente"));

let demo = document.querySelector("#demo");

demo.innerHTML = `<h3> Ciao ${studenteConnesso.nome} ${studenteConnesso.cognome}</h3>`