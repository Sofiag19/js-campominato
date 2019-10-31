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

// FUNZIONI
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
var isInBomb = true;
var i = 0;
while (bombs.length < 16) {
  oneBomb = numRandom(1,100);
  isIn = alreadyIn(oneBomb, bombs);
  if (isIn == true) {
    bombs.push(oneBomb);
  }
}
console.log(bombs);

// array scelte
var choises = [];

//elemento che crescerà nell'array choises
var k = 0;

// variabile di controllo per determinare l'uscita dal ciclo
var perso = false;

// variabile scelta utente
var numUtente;

while (perso == false && k < 84) {
  numUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log("Hai inserito " + numUtente);
  if (numUtente < 1 || numUtente > 100) {
    alert("Un numero ok, ma che vada da 1 a 100!");
  } else if (isNaN(numUtente)) {
    alert("Abbiamo detto un numero!");
  } else if (choises.includes(numUtente) == true) {
    alert("Non puoi inserire due numeri uguali");
  } else if (bombs.includes(numUtente) == true) {
    perso = true;
    alert("Hai perso");
    console.log("Hai perso");
  }else {
    choises.push(numUtente);
  }
  k++;
}

console.log(choises);
console.log("Il tuo punteggio è " + choises.length);
