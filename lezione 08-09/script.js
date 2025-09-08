//esercizio 1 Crea una variabile let citta = "Palermo"; e stampala in console.

let citta = "Palermo";
console.log(citta);

//esercizio 2 Crea una variabile const pi = 3.14; e prova a riassegnarle un valore. Cosa succede?
const pi = 3.14;
// pi = 3.15; // dà errore perchÃ© non posso riassegnare un valore a una costante

//esercizio 3 Crea una variabile let temperatura = 25; e stampala in console con un messaggio del tipo "la temperatura è di 25 gradi".
let temperatura = 25;
console.log(`la temperatura è di ${temperatura} gradi`);

//esercizio 4 variabile vuota, che valore ottieni?
let variabileVuota;
console.log(variabileVuota); // ottengo "undefined"

//esercizio 5 Stampa il tipo di queste variabili:
let numero = 42;
let parola = "ciao";
let flag = false;
let nulla = null;
let nonDefinito;

console.log(typeof numero); // number
console.log(typeof parola); // string
console.log(typeof flag); // boolean
console.log(typeof nulla); // object
console.log(typeof nonDefinito); // undefined

//esercizio 6
let x = 7 + 5;
let y = 10 - 3;
let z = 4 * 6;
let w = 20 / 4;

console.log(x); // 12
console.log(y); // 7
console.log(z); // 24
console.log(w); // 5

//esercizio 7
let resto = 17 % 3;
console.log(resto); // 2

//esercizio 8
let punti = 50;
punti += 10; // punti = punti + 10
console.log(punti); // 60

//esercizio 9
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 7);
console.log(8 !== "8");

//esercizio 10 condizioni
let eta = 20;
if (eta >= 18) {
  console.log("maggiorenne");
} else {
  console.log("minorenne");
}

//esercizio 11
let voto = 30;
if (voto >= 18) {
  console.log("Ottimo");
} else if (voto < 18) {
  console.log("insufficiente");
}

//esercizio 12
let ora = 9;
if (ora < 12) {
  console.log("Buongiorno");
} else if (ora >= 12 && ora < 18) {
  console.log("Buon pomeriggio");
} else {
  console.log("Buonasera");
}

//esercizio 13 stampa numeri da 1 a 20
let numeroIniziale = 0;
for (let i = 1; i <= 20; i++) {
  numeroIniziale++;
  console.log(numeroIniziale);
}

//esercizio 14 stampa numeri pari da 1 a 20
let numeroIniziale2 = 0;
for (let i = 1; i <= 20; i++) {
  numeroIniziale2++;
  if (numeroIniziale2 % 2 === 0) {
    console.log(numeroIniziale2);
  }
}

//esercizio 15 stampa numeri da 10 a 1 con while
let numeroIniziale3 = 11;
while (numeroIniziale3 >= 1) {
  numeroIniziale3--;
  console.log(numeroIniziale3);
}

//esercizio 16 stampare la tabellina del 5
tabellinaCinque = 5;
for (let i = 1; i <= 10; i++) {
  console.log(tabellinaCinque * i);
}

//esercizio 17
let somma = 0;
for (let i = 1; i <= 100; i++) {
  somma++;
  console.log(somma);
}
