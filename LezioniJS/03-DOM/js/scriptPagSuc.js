// const demo = document.querySelector("#demo");

// let studConnesso = JSON.parse(localStorage.getItem("studente"));

// demo.innerHTML = `<h3>Ciao ${studConnesso.nome} ${studConnesso.cognome}</h3>`;

class User{
    constructor(username, password, todoList){
        this.username = username;
        this.password = password;
        this.todoList = todoList;
    }
}

let nuovoUser = new User();

let myForm = document.querySelector("#my-form"); 

function saveUser(event){
    if(mioForm.nome == ""){
        event.preventDefault();
    } else{
        if(!localStorage.getItem("users")){
        nuovoUser.nome = myForm.username.value;
        nuovoUser.password = myForm.password.value;
        nuovoUser.todoList = [];
        localStorage.setItem("users", JSON.stringify(nuovoUser));
        }
    }
}

myForm.addEventListener("submit", saveUser)
