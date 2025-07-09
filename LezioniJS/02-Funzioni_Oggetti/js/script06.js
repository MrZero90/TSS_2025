class User{
    constructor(nome, cognome, eta, email){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.email = email;
    }
}

let nuovoUser = new User("Maria", "Giorgi", 27, "mari@hotmail.com");

console.log(nuovoUser);

let nuovoUserJSON = JSON.stringify(nuovoUser);
console.log(nuovoUser);

let objJSON = {"nome": "Luigi", "corso":"Caio", "studenti": 13}
let objOBJ = JSON.parse(objJSON);