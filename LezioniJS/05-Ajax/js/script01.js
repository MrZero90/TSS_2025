let urlEndpoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

// fetch API che esegue una chiamata esterna
fetch(urlEndpoint)
// in questo primo then gestisco la chiamata al servere e la sua risposta
.then(data => {
    console.log(data);
    return data.json(); // la prima then mi restituisce una promise
})
.then(response =>{
    console.log(response);
})