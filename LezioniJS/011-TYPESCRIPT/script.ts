// Ts è tipizzato, ho i tipi ma non ho l'obbligo
let nome = "Claudio";

let cognome: string = "Currò";
// cognome = 8; non posso assegnare un valore diverso da string

let eta: number;
eta = 36;

let interruttore: boolean = true;

let sportPref: string[] = ["volley", "calcio", "basket", "nuoto"];

sportPref.forEach(sport => {
    console.log(sport);
})
// posso creare un oggetto il cui tipo viene costruito al volo
// altresì chiamato object type definition
// anche le classi esistono e sono utilizzatissime
let studente: {
    nome: string,
    cognome: string,
    email: string,
    eta: number,
    presenza: boolean
};

studente = {
    nome: "Anna",
    cognome: "rossi",
    email: "a_rossi@gmail.com",
    eta: 30,
    presenza: true
};

console.log(studente);

type Persona = {
    nome: string,
    cognome: string
};

function salutaPersona(persona: Persona){
    console.log(`Ciao ${persona.nome} ${persona.cognome}`);
}

// esistono le classi

class Docente{
    nome: string;
    cognome: string;
    eta: number;
    private corsi: string[];

    constructor(nome: string, cognome: string, eta: number, corsi: string[]){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    // metodo
    insegna(nomeCorso: string){
        this.corsi.push(nomeCorso);
    }
    getCorsi(){
        return this.corsi;
    }
    saluta(): string{
        return `ciao, io sono ${this.nome} ${this.cognome}`;
    }

}

let doc = new Docente("Oscar", "Vecchione", 50, ["Html", "Css", "Db"]);
doc.insegna("Javascript");
console.log(doc.getCorsi());
console.log(doc.saluta());

//  esiste anche un altro modo di dichiarare la classe... 
// Non dichiaro le prop di classe ma dichiaro direttamente nel costruttore
class Utente{
    // posso evitare di specificare le prop di classe ma nel costruttore devo utilizzare i modificatori di accesso
    constructor(public nome: string, public cognome: string, private matricola: number){

    }
    estraiMatricola(): number{
        return this.matricola;
    }
}

let user = new Utente("Laura", "Verdi", 5);
console.log(
    user.estraiMatricola()
)

// un interfaccia
interface Umano {
    nome: string,
    cognome: string,

    saluta: () =>{}
}

// classe astratta che implementa interfaccia
abstract class Tizio implements Umano{
    nome: string;
    cognome: string;
    eta:number;

    saluta(): string{
        return this.nome;
    };

    // metodo astratto
    abstract mioMetodo(): void;

};