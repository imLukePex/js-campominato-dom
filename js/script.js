// L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// selezione del'elemento contenitore
const gridElement = document.getElementById("grid");

// selezione bottone play
const playButton = document.getElementById("play");

// generare un array di numeri in ordine casuale in un range
const newArrayNum = createMyArray(1, 16, 16);

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
                        myElement.classList.add("clicked");
                        console.log(`Il numero selezionato è: ${i}`);
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