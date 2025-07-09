function scriviTesto(){
    let msg;
    let testo;

    msg = document.querySelector("#demo");
    
    testo = document.querySelector("#testo").value;

    try {
        if(testo == "") throw "Testo vuoto";
        if(!isNaN(testo))throw "Stai inserendo un numero"
        if(testo.length > 10) throw "Stai inserendo un testo troppo lungo";
        if(testo.length < 5) throw "Stai inserendo un testo troppo corto";
        
        msg.innerHTML = "Inserimento corretto";
    } catch (error) {
        msg.innerHTML = "Errore: " + error;
    }
    finally{
        document.querySelector("#testo").value = "";
    }
}

let btn = document.querySelector("#btn");

btn.addEventListener("click", scriviTesto);