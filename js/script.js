// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)

var bombs = []
var maxAttempts = 100 - 16;
var attempts = []
var score = 0;
var difficult;
var maxNumber

//------------bonus----------------\\

// var difficult = parseInt(prompt("inserisci una delle difficoltà tra: (normale media alta) "))
//
// switch (difficult) {
//   case "normale":
//     maxNumbers = 100;
//     break;
//   case "media":
//     maxNumbers = 80;
//     break;
//   case "alta":
//     maxNumbers = 50;
//     break;
//   default:
//
// }

//--------bombe--------\\

while (bombs.length < 16) {
  var randomNumbers = generateRandomNumber (1, 99);
  var check = alreadyExist (bombs, randomNumbers)

  if (check == false) {
    bombs.push(randomNumbers);
  }

}
console.log(bombs);

//-----------fime bombe-----------\\


//-----------utente-------------\\


while (attempts.length < maxAttempts) {
  var numeroUtente = parseInt(prompt("inserisci un numero"));
  var check2 = alreadyExist (attempts, numeroUtente);
  var checkBombs = alreadyExist (bombs, numeroUtente);

  if (check2 == false && checkBombs == false) {
    attempts.push(numeroUtente);
    score++;
  } else if (check2 == true) {
    alert("numero già inserito");
  } else if (checkBombs == true) {
    alert("hai perso");
    break;
  }
}
console.log(attempts);
alert("punteggio " + score);


//-----------fine utente-------------\\



//----------functions------------\\

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (min + max) ) + min;
}


function alreadyExist (array, element) {
  var exist = false;

  for (var i = 0; i < array.length; i++) {
    if (element == array[i]) {
      exist = true;
      return exist;
    }
  }
  return exist;
}








































// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 84 numeri ogni volta potrebbe essere un po’ scocciante :wink:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
// Buon lavoro!
