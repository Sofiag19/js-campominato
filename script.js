// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// creazione array bombe
var bombs = [];

// funzione per ottenere un numero random tra 1 e 100 compresi
function numRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per capire se un elemento è in un array
function alreadyIn(value, array){
  var ins = true;
  var j = 0;
  var value;
  while (ins == true && j < array.length ) {
    if (array[j] == value) {
      ins = false;
    }
    j++;
  }
  return ins;
}


// generare 16 numeri casuali ed univoci da 1 a 100
var oneBomb;
var isIn = true;
var i = 0;
while (bombs.length < 16) {
  oneBomb = numRandom(1,100);
  isIn = alreadyIn(oneBomb, bombs);
  if (isIn == true) {
    bombs.push(oneBomb);
  }
}
console.log(bombs);

// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

var score = [];
var numUtente;
var isInNum = true;
var isBomb = false;
var perso = false;
var k = 0;
while (k < 5 || isBomb === false) { // cambiare il k < 5 con 84 ma finchè non riesco a chiudere il ciclo nemmeno ci provo :)
  numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));

  isBomb = alreadyIn(numUtente, bombs);
  if (isBomb === false) {
    alert("hai perso");
    perso = true;
  } else if (numUtente < 1 || numUtente > 100 || isNaN(numUtente)){
    if (numUtente < 1 || numUtente > 100) {
      alert("Un numero ok ma che vada da 1 a 100");
    } else if (isNaN(numUtente)) {
      alert("Abbiamo detto un numero!");
    } else {
      isInNum = alreadyIn(numUtente, score);
      if (isInNum == false) {
        alert("Non puoi inserire due numeri uguali");
      }
    }
  } else {
    score.push(numUtente);
  }
  // console.log(isBomb);
  k++;
}
console.log(isBomb);
console.log(perso);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("il tuo punteggio è " + score.length);
console.log(score);
