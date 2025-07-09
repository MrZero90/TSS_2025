let attori = ["Nathan Crowley","Daniel Blumberg", "Emma Thomas", "Christopher Nolan", "Cillian Murphy", "Nadia Stacey"];

let immagini = ["./img/Crowley.webp", "./img/Blumberg.jpg", "./img/Thomas.jpg", "./img/Nolan.jpg", "./img/Murphy.jpg", "./img/Stacey.jpg"]

let wikiAttori = ["https://it.wikipedia.org/wiki/Nathan_Crowley", "https://it.wikipedia.org/wiki/Daniel_Blumberg", "https://it.wikipedia.org/wiki/Emma_Thomas", "https://it.wikipedia.org/wiki/Christopher_Nolan", "https://it.wikipedia.org/wiki/Cillian_Murphy", "https://it.wikipedia.org/wiki/Nadia_Stacey"]

let liActors = document.querySelectorAll("li");
console.log(liActors);

for (let i = 0; i < liActors.length; i++) {
    let actorName = document.createElement("a");
    actorName.innerText = attori[i];
    actorName.setAttribute("href", wikiAttori[i])

    liActors[i].prepend(actorName);
}

for (let i = 0; i < liActors.length; i++) {  
    let immagineAttore = immagini[i];
    console.log(immagineAttore);
    let actorImage = document.querySelectorAll("img");
    actorImage[i].setAttribute("src", immagineAttore );
}
