// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// selezione del'elemento contenitore
const gridElement = document.getElementById("grid");

// selezione bottone play
const playButton = document.getElementById("play");

// generare un array di numeri in ordine casuale in un range
const newArrayNum = createMyArray(1, 100, 16);

console.log(newArrayNum);

// creazione ciclo della griglia
for (let i = 1; i <= 100; i++) {

// comparsa griglia al click del playbutton
    playButton.addEventListener("click",

        function () {
            const myElement = createMyElement("div", "square");
            gridElement.append(myElement);
            myElement.append(i);

                // cambio colore dei quadrati al click
                myElement.addEventListener("click",

                    function() {
                        if(newArrayNum.includes(i)) {
                            myElement.classList.add("clicked");
                            myElement.classList.add("square-bomb");
                            console.log(`Il numero selezionato è: ${i}`);
                            console.log("Hai selezionato una bomba, hai perso!!!");
                        } else {
                            myElement.classList.add("clicked");
                            myElement.classList.add("square-free");
                            console.log(`Il numero selezionato è: ${i}`);
                            console.log("Complimenti, non sei atterrato su una bomba!");
                        }
                    }
                );
        }
    );
}


// FUNZION 1

function createMyElement(tagtype, classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}


// FUNZION 2

// funzione di creazione di un array per numeri random in un range specifico
function createMyArray(minNum, maxNum, lengthArr) {

    // Array da popolare
    const newArray = [];

    // ciclo che mi popola l'array
    while (newArray.length < lengthArr) {

        // generare un numero random diverso in un range (min, max)
        let newNumber = genRandomNumMinMax(minNum, maxNum);
        // SE il numero generato NON è già presente nell'array
        if(!newArray.includes(newNumber)) {
            // ALLORA lo pusho nell'array
            newArray.push(newNumber);
        }
    }
        
    
    return newArray;

}


// FUNZION 3

// funzione che genera un numero random in un range (min, max)
function genRandomNumMinMax(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}