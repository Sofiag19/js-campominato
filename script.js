// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// Ci sono 2 controlli che van fatti già di base per dar senso all’ex:
// i 16 numeri vietati/mina, devono essere tutti diversi, non possono esserci doppioni;
// l’utente non può inserire due volte lo stesso numero, ma sempre numeri diversi.

// generare 16 numeri casuali ed univoci da 1 a 100

  var numProib = []; //dove andranno i miei numeri

  // funzione per ottenere un numero random tra 1 e 100 compresi
  function numRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // aggiungere numeri tra quelli proibiti e controllare che già non esistino

  for (var i = 0; i < 16; i++) {
    var nRa = numRandom(1, 100); //produco un numero random
    var trovato = inArray(nRa, numProib); //vedo se il random è già nell'array
    if (trovato == false) {
      numProib.push(nRa);
    }
  }
  console.log("i numeri 'bomba' sono " + numProib);


// decretare se un valore sia presente oppure no in un array
function inArray (value, array) {
  var trovato = false;
  var i = 0;
  while (trovato === false && i < array.lenght) {
    if (array[i] == value) {
      trovato = true;
    }
    i++;
  }
  return trovato;
}
