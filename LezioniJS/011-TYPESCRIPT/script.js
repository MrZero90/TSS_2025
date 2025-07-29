// Ts è tipizzato, ho i tipi ma non ho l'obbligo
var nome = "Claudio";
var cognome = "Currò";
// cognome = 8; non posso assegnare un valore diverso da string
var eta;
eta = 36;
var interruttore = true;
var sportPref = ["volley", "calcio", "basket", "nuoto"];
sportPref.forEach(function (sport) {
    console.log(sport);
});
// posso creare un oggetto il cui tipo viene costruito al volo
// altresì chiamato object type definition
// anche le classi esistono e sono utilizzatissime
var studente;
studente = {
    nome: "Anna",
    cognome: "rossi",
    email: "a_rossi@gmail.com",
    eta: 30,
    presenza: true
};
console.log(studente);
function salutaPersona(persona) {
    console.log("Ciao ".concat(persona.nome, " ").concat(persona.cognome));
}
// esistono le classi
var Docente = /** @class */ (function () {
    function Docente(nome, cognome, eta, corsi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }
    // metodo
    Docente.prototype.insegna = function (nomeCorso) {
        this.corsi.push(nomeCorso);
    };
    Docente.prototype.getCorsi = function () {
        return this.corsi;
    };
    Docente.prototype.saluta = function () {
        return "ciao, io sono ".concat(this.nome, " ").concat(this.cognome);
    };
    return Docente;
}());
var doc = new Docente("Oscar", "Vecchione", 50, ["Html", "Css", "Db"]);
doc.insegna("Javascript");
console.log(doc.getCorsi());
console.log(doc.saluta());
//  esiste anche un altro modo di dichiarare la classe... 
// Non dichiaro le prop di classe ma dichiaro direttamente nel costruttore
var Utente = /** @class */ (function () {
    // posso evitare di specificare le prop di classe ma nel costruttore devo utilizzare i modificatori di accesso
    function Utente(nome, cognome, matricola) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    Utente.prototype.estraiMatricola = function () {
        return this.matricola;
    };
    return Utente;
}());
var user = new Utente("Laura", "Verdi", 5);
console.log(user.estraiMatricola());
var Tizio = /** @class */ (function () {
    function Tizio() {
    }
    Tizio.prototype.saluta = function () {
        return this.nome;
    };
    ;
    return Tizio;
}());
;
