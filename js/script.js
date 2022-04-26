// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste


//Bottone di click per inizializzare il gioco

document.getElementById("btn-play").addEventListener("click",

    //generazione della griglia in base al livello di difficoltà 
    function() {

        const cellUndred = document.querySelector(".grid-container");
        cellUndred.innerHTML = "";
        const level = document.getElementById("level").value;
        console.log(level);

        let numberBox = 0;
        switch (level) {
            case 'easy':
                numberBox = 100;
                break;
            case 'medium':
                numberBox = 81;
                break;
            case 'hard':
                numberBox = 49;
                break;
        }


        // generazione delle celle da 1 a 100
        for (let i = 1; i <= numberBox; i++) {
            let cellGrid;
            cellGrid = i;

            const singleCell = document.createElement("div");
            singleCell.innerHTML += `${cellGrid}`;

            singleCell.classList.add("cell-grid");
            console.log(singleCell);

            switch (level) {
                case 'easy':
                    singleCell.classList.add("cell-grid");
                    break;
                case 'medium':
                    singleCell.classList.add("cell-grid-m");
                    break;
                case 'hard':
                    singleCell.classList.add("cell-grid-h");
                    break;
            }

            singleCell.addEventListener("click", function() {
                this.classList.add("cell-active");
                console.log(this);
            });
            cellUndred.append(singleCell);
        }
        // Generazione bombe in maniera random

        const numBomb = 16;
        const arrayBomb = generateRandomBomb(numBomb, numberBox);
        console.log(arrayBomb);
        const cellSafe = [];
        const safeNumbers = numberBox - numBomb;
    }


);
/**
 * 
 * @param {Number} numberQuantity --> quantità dei numeri da generare
 * @param {Number} maxLimit --> limite massimo dei range dei numeri
 * @returns {Array} --> array di numeri random non ripetuti
 */

function generateRandomBomb(numberQuantity, maxLimit) {
    const numbersArray = [];
    while (numbersArray.length < numBomb) {
        const randomNumber = getRndInteger(1, maxLimit);
        if (!numbersArray.includes(randomNumber)) {
            numbersArray.push(randomNumber);
        }
    }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}