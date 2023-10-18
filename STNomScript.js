const facile = [
    { nom: "ahki", nomComplet: "Pita AHKI", image: "images/ahki.png"},
    { nom: "ainuu", nomComplet: "David AINU’U", image: "images/ainuu.png"},
    { nom: "aldegheri", nomComplet: "Dorian ALDEGHERI", image: "images/aldegheri.png"},
    { nom: "arnold", nomComplet: "Ritchie ARNOLD", image: "images/arnold.png"},
    { nom: "baille", nomComplet: "Cyril BAILLE", image: "images/baille.png"},
    { nom: "barassi", nomComplet: "Pierre-Louis BARASSI", image: "images/barassi.png"},
    { nom: "brennan", nomComplet: "Joshua BRENNAN", image: "images/brennan.png"},
    { nom: "capuozzo", nomComplet: "Ange CAPUOZZO", image: "images/capuozzo.png"},
    { nom: "chocobares", nomComplet: "Santiago CHOCOBARES", image: "images/chocobares.png"}, //12
    { nom: "cramont", nomComplet: "Guillaume CRAMONT", image: "images/cramont.png"},
    { nom: "cros", nomComplet: "François CROS", image: "images/cros.png"},
    { nom: "delibes", nomComplet: "Dimitri DELIBES", image: "images/delibes.png"},
    { nom: "dupont", nomComplet: "Antoine DUPONT", image: "images/dupont.png"},
    { nom: "duprat", nomComplet: "Maxime DUPRAT", image: "images/duprat.png"},
    { nom: "elstadt", nomComplet: "Rynhard ELSTADT", image: "images/elstadt.png"},
    { nom: "flament", nomComplet: "Thibaud FLAMENT", image: "images/flament.png"},
    { nom: "germain", nomComplet: "Baptiste GERMAIN", image: "images/germain.png"},
    { nom: "graou", nomComplet: "Paul GRAOU", image: "images/graou.png"}, //15
    { nom: "guitoune", nomComplet: "Sofiane GUITOUNE", image: "images/guitoune.png"},
    { nom: "jaminet", nomComplet: "Melvyn JAMINET", image: "images/jaminet.png"},
    { nom: "jelonch", nomComplet: "Anthony JELONCH", image: "images/jelonch.png"},
    { nom: "lebel", nomComplet: "Matthis LEBEL", image: "images/lebel.png"},
    { nom: "mallia", nomComplet: "Juan Cruz MALLÍA", image: "images/mallia.png"},
    { nom: "marchand", nomComplet: "Julien MARCHAND", image: "images/marchand.png"},
    { nom: "mauvaka", nomComplet: "Peato MAUVAKA", image: "images/mauvaka.png"},
    { nom: "meafou", nomComplet: "Emmanuel MEAFOU", image: "images/meafou.png"},
    { nom: "neti", nomComplet: "Rodrigue NETI", image: "images/neti.png"},
    { nom: "rntamack", nomComplet: "Romain NTAMACK", image: "images/rntamack.png"},
    { nom: "tntamack", nomComplet: "Théo NTAMACK", image: "images/tntamack.png"},
    { nom: "placines", nomComplet: "Alban PLACINES", image: "images/placines.png"},
    { nom: "ramos", nomComplet: "Thomas RAMOS", image: "images/ramos.png"},
    { nom: "aretiere", nomComplet: "Arthur RETIÈRE", image: "images/aretiere.png"},
    { nom: "roumat", nomComplet: "Alexandre ROUMAT", image: "images/roumat.png"},
    { nom: "tauzin", nomComplet: "Lucas TAUZIN", image: "images/tauzin.png"},
    { nom: "willis", nomComplet: "Jack WILLIS", image: "images/willis.png"},
];

const moyen = [
    { nom: "auriac", nomComplet: "Max AURIAC", image: "images/auriac.png"},
    { nom: "bainivalu", nomComplet: "Eto BAINIVALU", image: "images/bainivalu.png"},
    { nom: "banos", nomComplet: "Leo BANOS", image: "images/banos.png"},
    { nom: "bituniyata", nomComplet: "Setareki BITUNIYATA", image: "images/bituniyata.png"},
    { nom: "boubila", nomComplet: "Ian BOUBILA", image: "images/boubila.png"},
    { nom: "castroferreira", nomComplet: "Mathis CASTROFERREIRA", image: "images/castroferreira.png"},
    { nom: "costes", nomComplet: "Paul COSTES", image: "images/costes.png"},
    { nom: "delpy", nomComplet: "Valentin DELPY", image: "images/delpy.png"},
    { nom: "epee", nomComplet: "Nelson ÉPÉE", image: "images/epee.png"},
    { nom: "faasalele", nomComplet: "Piula FAASALELE", image: "images/faasalele.png"},
    { nom: "franks", nomComplet: "Owen FRANKS", image: "images/franks.png"},
    { nom: "hawkes", nomComplet: "Malachi HAWKES", image: "images/hawkes.png"},
    { nom: "laulala", nomComplet: "Nepo LAULALA", image: "images/laulala.png"},
    { nom: "merkler", nomComplet: "Joel MERKLER", image: "images/merkler.png"},
    { nom: "okumura", nomComplet: "Kakeru OKUMURA", image: "images/okumura.png"},
    { nom: "reilhes", nomComplet: "Hugo REILHES", image: "images/reilhes.png"},
    { nom: "renda", nomComplet: "Simon RENDA", image: "images/renda.png"},
    { nom: "eretiere", nomComplet: "Edgar RETIÈRE", image: "images/eretiere.png"},
    { nom: "searle", nomComplet: "Billy SEARLE", image: "images/searle.png"},
    { nom: "tilsley", nomComplet: "George TILSLEY", image: "images/tilsley.png"},
    { nom: "verge", nomComplet: "Clement VERGÉ", image: "images/verge.png"},

];

const difficile = [...facile, ...moyen];

var personnages;
var personnageATrouver;
var personnageNom;
var tableauComplet;
var tableauSelection;
var animErreur = zoneImage.querySelector("#imagePerso");
var nombreTrouve = 0;
var nombreReussite = 0;
var reussiteActuelle = 1;
var compteurSecondes = 0;
var secondesAffichees;
var compteurMinutes = 0;
var minutesAffichees;
var intervalCompteur;
var pourcentage = 0;
var sonVictoire = document.getElementById('sonVictoire');
var sonEchec = document.getElementById('sonEchec');
var sonSuivant = document.getElementById('sonSuivant');
var nombreTotalpersos;
var pourcentageReussite;
var inversion;
var timeout1;
var timeout2;
var timeout3;
var timeout4;
var timeout5;

animationSousTexte();

propositions.style.transform = 'scale(1.2)';
propositions.style.opacity = '0';
barreComplete.style.transform = 'translateY(-30px)'
barreComplete.style.opacity = '0';
score.style.transform = 'translateX(40px)'
score.style.opacity = '0';
compteurID.style.transform = 'translateX(-40px)'
compteurID.style.opacity = '0';
setTimeout(function() {
    propositions.style.transform = 'scale(1.0)';
    propositions.style.opacity = '1';
    barreComplete.style.transform = 'translateY(0)'
    barreComplete.style.opacity = '1';
    score.style.transform = 'translateX(0)'
    score.style.opacity = '1';
    compteurID.style.transform = 'translateX(0)'
    compteurID.style.opacity = '1';
}, 10)


function retourIndex () {
    window.location.href = "index.html";
}

function retourMenu () {
    animErreur.classList.remove("animErreur");
    animErreur.classList.remove("animErreurDeux");
    rejouer();
    arreterCompteur();
    boutonRetour.onclick = retourIndex;
}

function incrementerCompteur () {
    compteurSecondes++;
    if (compteurSecondes == 60) {
        compteurMinutes++;
        compteurSecondes = 0;
    }
    secondesAffichees = compteurSecondes.toString().padStart(2, "0");
    minutesAffichees = compteurMinutes.toString().padStart(2, "0");
    compteurID.innerHTML = `<b>temps</b>   ${minutesAffichees} : ${secondesAffichees}`;
}

function lancerCompteur () {
    compteurMinutes = 0;
    compteurSecondes = 0;
    intervalCompteur = setInterval(incrementerCompteur,1000);
}

function arreterCompteur () {
    clearInterval(intervalCompteur);
}
    
function shuffleArray(array) { //fonction pour mélanger//
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

 function reintegrerPersoSiEchec () {
    personnages.push(personnageATrouver);
}

function afficherBoutons () {
    if (tableauSelection.length > 5) {
        propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    <button id="${tableauSelection[1]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[1]["nomComplet"]}</button>
    <button id="${tableauSelection[2]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[2]["nomComplet"]}</button>
    <button id="${tableauSelection[3]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[3]["nomComplet"]}</button>
    <button id="${tableauSelection[4]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[4]["nomComplet"]}</button>
    <button id="${tableauSelection[5]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[5]["nomComplet"]}</button>
    `;
    } else if (tableauSelection.length === 5) {
    propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    <button id="${tableauSelection[1]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[1]["nomComplet"]}</button>
    <button id="${tableauSelection[2]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[2]["nomComplet"]}</button>
    <button id="${tableauSelection[3]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[3]["nomComplet"]}</button>
    <button id="${tableauSelection[4]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[4]["nomComplet"]}</button>
    `;
    } else if (tableauSelection.length === 4) {
    propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    <button id="${tableauSelection[1]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[1]["nomComplet"]}</button>
    <button id="${tableauSelection[2]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[2]["nomComplet"]}</button>
    <button id="${tableauSelection[3]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[3]["nomComplet"]}</button>
    `;
    } else if (tableauSelection.length === 3) {
    propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    <button id="${tableauSelection[1]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[1]["nomComplet"]}</button>
    <button id="${tableauSelection[2]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[2]["nomComplet"]}</button>
    `;
    } else if (tableauSelection.length === 2) {
    propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    <button id="${tableauSelection[1]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[1]["nomComplet"]}</button>
    `;
    } else {
    propositions.innerHTML = `
    <button id="${tableauSelection[0]["nom"]}" onclick="lancerGuess(this.id)">${tableauSelection[0]["nomComplet"]}</button>
    `;
    }
}

function animerErreur () {
    texteAffiche.style.color = "#ff9787";
    texteAffiche.textContent = "Mauvaise réponse...";
    texteAffiche.style.transform = 'scale(1.1)';
    
    setTimeout(function() {
        texteAffiche.style.transform = 'scale(0.9)';
    }, 100)

    setTimeout(function() {
        texteAffiche.style.transform = 'scale(1.0)';
    }, 250)
}

function animationSousTexte () {
boutonFacile.addEventListener('mouseover', () => {
  sousTexte.innerHTML = `Joueurs les plus titularisés<br><b>(ayant joué plus de 10 matchs à Toulouse lors d'une précédente saison)<b>`
  sousTexte.style.opacity = '1';
});

boutonFacile.addEventListener('mouseout', () => {
  sousTexte.style.opacity = '0';
});

boutonMoyen.addEventListener('mouseover', () => {
  sousTexte.innerHTML = `Joueurs moins titularisés<br><b>(ayant joué moins de 10 matchs à Toulouse lors d'une précédente saison)<b>`
  sousTexte.style.opacity = '1';
});

boutonMoyen.addEventListener('mouseout', () => {
  sousTexte.style.opacity = '0';
});

boutonDifficile.addEventListener('mouseover', () => {
  sousTexte.innerHTML = `Tous les joueurs`
  sousTexte.style.opacity = '1';
});

boutonDifficile.addEventListener('mouseout', () => {
  sousTexte.style.opacity = '0';
});
}

function nouveauPerso () {
    personnageATrouver = personnages[Math.floor(Math.random() * personnages.length)];
    imagePerso.src = personnageATrouver.image;
    personnageNom = personnageATrouver.nom;
}

function selection () {
    tableauComplet = personnages;
    for (var i = 0; i < tableauComplet.length; i++) { //supprime perso à trouver du tableau provisoir//
            if (tableauComplet[i]["nom"] === personnageNom) {
                tableauComplet.splice(i, 1);
            }
    }
    shuffleArray(tableauComplet); //mélange le tableau sans le perso à trouver//
    tableauSelection = tableauComplet.slice(0, 5); //ne garde que les X premiers du mélange//
    tableauSelection.push(personnageATrouver); //ajoute perso à trouver//
    shuffleArray(tableauSelection); //mélange à nouveau//
}

function lancerFacile () {
    propositions.style.display = 'block';
    sousTexte.style.opacity = '0';
    personnages = [...facile];
    nombreTotalpersos = facile.length;
    nouveauPerso ();
    selection ();
    afficherBoutons();
    lancerCompteur();
    totalPersoAffiche.innerHTML = facile.length;
    nombrePersoAffiche.innerHTML = nombreTrouve;
    boutonRetour.onclick = retourMenu;
}

function lancerMoyen () {
    propositions.style.display = 'block';
    sousTexte.style.opacity = '0';
    personnages = [...moyen];
    nombreTotalpersos = moyen.length;
    nouveauPerso ();
    selection ();
    afficherBoutons();
    lancerCompteur();
    totalPersoAffiche.innerHTML = moyen.length;
    nombrePersoAffiche.innerHTML = nombreTrouve;
    boutonRetour.onclick = retourMenu;
}

function lancerDifficile () {
    propositions.style.display = 'block';
    sousTexte.style.opacity = '0';
    personnages = [...difficile];
    nombreTotalpersos = difficile.length;
    nouveauPerso ();
    selection ();
    afficherBoutons();
    lancerCompteur();
    totalPersoAffiche.innerHTML = difficile.length;
    nombrePersoAffiche.innerHTML = nombreTrouve;
    boutonRetour.onclick = retourMenu;
}

function rejouer () {
    nombreTrouve = 0;
    nombreReussite = 0;
    reussiteActuelle = 1;
    texteAffiche.style.fontSize = "16px";
    texteAffiche.textContent = "";
    texteAffiche.style.opacity = '1';
    texteAffiche.style.marginTop = "15px";
    score.innerHTML = `<b>score</b>   0 / 0`;
    compteurID.innerHTML = `<b>temps</b>   00 : 00`;
    nombrePersoAffiche.innerHTML = nombreTrouve;
    barrePourcentage.style.width = "0" ;
    imageCoupe.style.display = 'none';
    imagePerso.style.display ='block';
    imagePerso.src = 'images/imageDepart.png';
    imageCoupe.style.transform = 'scale(1.4)';
    imageCoupe.style.opacity = '0';
    propositions.innerHTML = '<button id="boutonFacile" class="boutonsCommencer" onclick="lancerFacile()">Facile</button><button id="boutonMoyen" class="boutonsCommencer" onclick="lancerMoyen()">Moyen</button><button id="boutonDifficile" class="boutonsCommencer" onclick="lancerDifficile()">Difficile</button>';
    propositions.style.display = 'flex';
    barrePourcentageReussite.style.width = '98%';
    barreReussite.style.display = 'none';
    pourcentageReussiteAffiche.style.right = '20px';
    barreReussite.style.opacity = '0';
    animationSousTexte();
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);
}

function lancerGuess(idBouton) {
    if (personnages.length == 0 && personnageNom == idBouton) {
        arreterCompteur();
        sonVictoire.play();
        animErreur = zone.querySelector("#imagePerso");
        animErreur.classList.remove("animErreur");
        animErreur.classList.remove("animErreurDeux");
        texteAffiche.style.color = "white";
        texteAffiche.style.fontSize = "15px";
        nombreTrouve++;
        for (var i = 0; i < personnages.length; i++) {
            if (personnages[i]["nom"] === idBouton) {
                personnages.splice(i, 1);
            }
        }

        imagePerso.style.display = 'none';
        imageCoupe.style.display = 'inline';
        timeout1 = setTimeout(function() {
            imageCoupe.style.transform = 'scale(1.0)';
            imageCoupe.style.opacity = '1';
        },20)
        timeout2 = setTimeout(function() {
            barreReussite.style.opacity = '1';
        },800)
        nombreReussite = nombreReussite + reussiteActuelle;
        reussiteActuelle = 1;
        texteAffiche.style.marginTop = "35px";
        propositions.innerHTML = `<button id="boutonRejouer" onclick="rejouer()">Rejouer</button>`;
        pourcentageReussite = nombreReussite * 100 / nombreTotalpersos;
        inversion = 100 - pourcentageReussite;
        barreReussite.style.display = 'flex';
        var entier = Math.round(pourcentageReussite);
        texteAffiche.style.opacity = '0';
        texteAffiche.innerHTML = '';
        pourcentageReussiteAffiche.textContent = entier + "%";
        timeout3 = setTimeout(function() {
            barrePourcentageReussite.style.width = inversion + "%";
        },1200)
        timeout4 = setTimeout(function() {
            pourcentageReussiteAffiche.style.right = '-55px';
        },2000)
        timeout5 = setTimeout(function() {
            texteAffiche.style.opacity = '1';
            texteAffiche.innerHTML = `Tu as <strong>${entier}%</strong> de bonnes réponses (<strong>${nombreReussite}/${nombreTrouve}</strong>).<br>
        Ton temps est de <strong>${compteurMinutes}</strong> minutes et <strong>${compteurSecondes}</strong> secondes.`;
        }, 3200);
    } else if (personnageNom == idBouton) {
        sonSuivant.play();
        animErreur.classList.remove("animErreur");
        animErreur.classList.remove("animErreurDeux");
        texteAffiche.textContent = "";
        nombreTrouve++;
        for (var i = 0; i < personnages.length; i++) {
            if (personnages[i]["nom"] === idBouton) {
                personnages.splice(i, 1);
            }
        }
        nouveauPerso();
        selection ();
        afficherBoutons();
        nombreReussite = nombreReussite + reussiteActuelle;
        reussiteActuelle = 1;
    
    } else {
        sonEchec.play();
        reussiteActuelle = 0;
        animerErreur();
        var boutonEnRouge = propositions.querySelector("#" + idBouton);
        animErreur.classList.remove("animErreur");
        animErreur.classList.remove("animErreurDeux");
        setTimeout(function() {
            animErreur.classList.add("animErreur");
            boutonEnRouge.classList.add("boutonRouge");
        }, 10)
        setTimeout(function() {
            animErreur.classList.add("animErreurDeux")
        }, 200);
    }

    score.innerHTML = `<b>score</b>   ${nombreReussite} / ${nombreTrouve}`;
    
    pourcentage = nombreTrouve * 100 / nombreTotalpersos;
    barrePourcentage.style.width = pourcentage + "%";
    nombrePersoAffiche.innerHTML = nombreTrouve;
}
