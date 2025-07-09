// aggiungere o rimuovere un elemento HTML

let listaAlbum = document.querySelector("#listaAlbum"); // Parent

// aggiungi un album
let li = document.createElement("li"); // Child
li.textContent = "Pokerface - Lady Gaga"; // <li>Pokerface - Lady Gaga</li>

listaAlbum.appendChild(li);

// elimino un elemento dalla lista della spesa
let listaSpesa = document.querySelector("#lista"); // Parent nome

let childDaEliminare = document.querySelector("#tre"); // Child node

// nodoParent.metodo(nodoChild)
listaSpesa.removeChild(childDaEliminare);

