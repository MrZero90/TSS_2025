// notazione letterale
let studente = {
    // proprieta
    nome: "Dario",
    cognome: "Mennillo",
    eta: 36,
    matricola: 123,
    zaino: {
        pc:{
            marca: "Dell",
            modello: "Vostro",
            ram: 8
        },
        libro: "Guida Galattica per autostoppisti"
    },
    corsi:[
        "Sviluppo Software",
        "Sviluppo Web",
        "Sistemisti"
    ],

    // metodi 
    superaEsame: function(){
        return "Bravo, hai superato l'esame";
    },

    // metodi possono anche essere definiti senza la parola "function"
    presentati(){
        let presentazione = `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
        return presentazione;
    }
}

console.log(studente.nome);
console.log(studente.superaEsame());
console.log(studente.presentati());

// voglio conoscere il modello del pc dello studente
console.log(studente.zaino.pc.modello + " è il modello del pc");
// voglio sapere quali sono i corsi del mio studente
studente.corsi.forEach(corso=>{
    console.log(corso);
});

let motocicletta = {
    marca: "",
    modello: "",
    cilindrata: "",
    marcia: 0,
    velocita: 0,
    num_giri: 0,
    acceso: false,

    creaMoto(marca, modello, cilindrata){
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    },

    modificaGiri(numGiri){
        this.num_giri = numGiri;
        return "giri motore: " + this.num_giri;
    },
    
    cambiaMarcia(marcia){
        this.marcia = marcia;
        return "Sei alla marcia: " + this.marcia;
    },

    calcolaVel(){
        this.velocita = (this.num_giri * this.marcia) / 100;
        return `Velocità attuale: ${this.velocita}`;
    }
}

console.log(motocicletta);

motocicletta.creaMoto("Kawasaki", "z750", 750);
motocicletta.modificaGiri(4000);
motocicletta.cambiaMarcia(3);
console.log(motocicletta.calcolaVel());
console.log(motocicletta);