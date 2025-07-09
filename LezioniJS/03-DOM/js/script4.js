class User {

    nome;
    cognome;
    eta;
    email;

    constructor() {

    }
}


let feed = document.querySelector("#feed");
let mioForm = document.querySelector("#mioForm");

function inviaForm(event){
    // event.preventDefault();
    // console.log(event);

    // posso farlo tramite byId
    // console.log(document.querySelector("#nome").value);

    // DA PREFERIRE
    // posso risalire ai campi byName
    // console.log(mioForm.nome);
    // posso risalire al valore di un campo byName
    // console.log(mioForm.cognome.value);

    /** Adesso che so prendere i campi nome li controllo uno ad uno */

    feed.innerHTML = "";

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    
    let user = new User();

    if(mioForm.nome.value == ""){
        feed.innerHTML += "<h3>Hai dimenticato il nome</h3>";
        mioForm.nome.setAttribute("class", "borderRed");
        event.preventDefault();
    } else{
        mioForm.nome.removeAttribute("class");
        user.nome = mioForm.nome.value;
    }
    
    if(mioForm.cognome.value == ""){
        feed.innerHTML += "<h3>Hai dimenticato il cognome</h3>";
        mioForm.cognome.setAttribute("class", "borderRed");
        event.preventDefault();        
    }else{
        mioForm.cognome.removeAttribute("class");
        user.cognome = mioForm.cognome.value;
    }
    
    if(mioForm.eta.value == 0 || isNaN(mioForm.eta.value)){
        feed.innerHTML += "<h3>Hai dimenticato la tua età</h3>";
        mioForm.eta.setAttribute("class", "borderRed");
        event.preventDefault();        
    }else{
        mioForm.eta.removeAttribute("class");
        user.eta = mioForm.eta.value;
    }

    if(mioForm.email.value.match(emailRegex) || mioForm.email.value == ""){
        feed.innerHTML += "<h3>Email errata</h3>";
        mioForm.email.setAttribute("class", "borderRed");
    event.preventDefault();
    }else{
        mioForm.email.removeAttribute("class");
        user.email = mioForm.email.value;
    }

    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    event.preventDefault();
}

mioForm.addEventListener("submit", inviaForm);
