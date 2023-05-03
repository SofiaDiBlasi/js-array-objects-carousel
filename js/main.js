//devo creare funzioni da richiamare per evitare ripetizioni, ma ero stanca =( 

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//recupero il contenitore dal mio html
let container = document.getElementById("contenitore");

let contenitoreGrande = document.createElement("div");
contenitoreGrande.className = "contenitoreG"

let contenitorePiccolo = document.createElement("div");
contenitorePiccolo.className = "contenitoreP"

container.append(contenitoreGrande);
container.append(contenitorePiccolo);

//creo un ciclo for per far in modo che la stessa azione si ripeta per ogni elemnto della lista di oggetti
for (let i= 0; i < images.length; i++) {
    const element = images[i];

    if (i == 0 ) {
        contenitoreGrande.style.backgroundImage = "url(./" + element.image + ")";
        contenitoreGrande.style.backgroundSize = "cover";
        contenitoreGrande.style.backgroundRepeat = "no-repeat";

        let titolo = document.createElement("h1");
        titolo.innerHTML = element.title;
        titolo.className= "testo";
        contenitoreGrande.append(titolo);

        let testo = document.createElement("p");
        testo.innerHTML = element.text;
        testo.className = "testo";
        contenitoreGrande.append(testo);
    } else {
        let img = document.createElement("div");
        img.style.backgroundImage = "url(./" + element.image + ")";
        img.style.backgroundSize = "cover";
        img.style.backgroundRepeat = "no-repeat";
        img.className = "dimensioni";
        contenitorePiccolo.append(img);

        let titolo = document.createElement("h1");
        titolo.innerHTML = element.title;
        titolo.className = "none";
        img.append(titolo);

        let testo = document.createElement("p");
        testo.innerHTML = element.text;
        testo.className = "none";
        img.append(testo);
    }
};

let avanti = document.getElementById("avanti");

let indietro = document.getElementById("indietro");

let imgVisualizzata = 0;

avanti.addEventListener("click", function() {

    if(imgVisualizzata == 4 ){
        imgVisualizzata = -1;
    }

    imgVisualizzata++;

    contenitoreGrande.innerHTML = "";

    let nextImg = images[imgVisualizzata];

    contenitoreGrande.style.backgroundImage = "url(./" + nextImg.image + ")";
    contenitoreGrande.style.backgroundSize = "cover";
    contenitoreGrande.style.backgroundRepeat = "no-repeat";

    let titoloNuovo = document.createElement("h1");
    titoloNuovo.innerHTML = nextImg.title;
    titoloNuovo.className= "testo";
    contenitoreGrande.append(titoloNuovo);

    let testoNuovo = document.createElement("p");
    testoNuovo.innerHTML = nextImg.text;
    testoNuovo.className = "testo";
    contenitoreGrande.append(testoNuovo);
    
    contenitorePiccolo.removeChild(contenitorePiccolo.firstElementChild);

    let imgDaRimuovere = imgVisualizzata -1;
    if (imgDaRimuovere == -1){
        imgDaRimuovere = 4;
    }
    let previousImg = images[imgDaRimuovere];

    let img = document.createElement("div");
    img.style.backgroundImage = "url(./" + previousImg.image + ")";
    img.style.backgroundSize = "cover";
    img.style.backgroundRepeat = "no-repeat";
    img.className = "dimensioni";
    contenitorePiccolo.append(img);

    let titolo = document.createElement("h1");
    titolo.innerHTML = previousImg.title;
    titolo.className = "none";
    img.append(titolo);

    let testo = document.createElement("p");
    testo.innerHTML = previousImg.text;
    testo.className = "none";
    img.append(testo);

})

indietro.addEventListener("click", function() {

    if(imgVisualizzata == 0 ){
        imgVisualizzata = 5;
    }

    imgVisualizzata--;

    contenitoreGrande.innerHTML = "";

    let nextImg = images[imgVisualizzata];

    contenitoreGrande.style.backgroundImage = "url(./" + nextImg.image + ")";
    contenitoreGrande.style.backgroundSize = "cover";
    contenitoreGrande.style.backgroundRepeat = "no-repeat";

    let titoloNuovo = document.createElement("h1");
    titoloNuovo.innerHTML = nextImg.title;
    titoloNuovo.className= "testo";
    contenitoreGrande.append(titoloNuovo);

    let testoNuovo = document.createElement("p");
    testoNuovo.innerHTML = nextImg.text;
    testoNuovo.className = "testo";
    contenitoreGrande.append(testoNuovo);
    
    contenitorePiccolo.removeChild(contenitorePiccolo.firstElementChild);

    let imgDaRimuovere = imgVisualizzata +1;
    if (imgDaRimuovere == 5){
        imgDaRimuovere = 0;
    }
    let previousImg = images[imgDaRimuovere];

    let img = document.createElement("div");
    img.style.backgroundImage = "url(./" + previousImg.image + ")";
    img.style.backgroundSize = "cover";
    img.style.backgroundRepeat = "no-repeat";
    img.className = "dimensioni";
    contenitorePiccolo.append(img);

    let titolo = document.createElement("h1");
    titolo.innerHTML = previousImg.title;
    titolo.className = "none";
    img.append(titolo);

    let testo = document.createElement("p");
    testo.innerHTML = previousImg.text;
    testo.className = "none";
    img.append(testo);

})
