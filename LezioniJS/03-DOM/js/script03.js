let li4 = document.querySelector("#quattro");

console.log(li4.getAttribute("id")); // quattro
console.log(li4.getAttribute("class")); //txtRed
console.log(li4.hasAttribute("href")); // false

// setAttribute, specifica gli attributi di un elemento
let li6 = document.querySelector("#sei");

// nodo.setAttribute("nomeAttr", "valore");
li6.setAttribute("class", "txtRed");

let lisAlbum = document.querySelectorAll("#listaAlbum li");
lisAlbum.forEach(li=>{
    // con questa riga tolgo anche le classi precedenti
    // li.setAttribute("class", "txtRed");

    // aggiungi classe
    li.classList.add("txtRed");

    // rimuovi classe
    li.classList.remove("txtAlb");
})

lisAlbum.forEach(li => {
    li.addEventListener("click", function(){
        li.classList.toggle("txtAlb");
    })
});