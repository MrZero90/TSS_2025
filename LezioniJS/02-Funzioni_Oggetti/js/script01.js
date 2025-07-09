// Dichiaro una function

let demo = document.getElementById("demo");
function saluta(){
    console.log("Ciao dalla funzione");
    demo.innerHTML = "<h2>Ciao, Claudio</h2>";
}

// La funzione può essere chiamata all'interno dello script
saluta();

// La posso richiamare in altre funzioni
function benvenuto(){
    saluta();

    console.log("Adesso sono dentro benvenuto");
}

// benvenuto();

// Adesso richiamerò benvenuto() da html
let btn = document.getElementById("btn");
// La funzione va chiamata senza parentesi perchè non deve partire adesso
btn.addEventListener("click", benvenuto);

