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

//esercizio 6 operazioni matematiche
let x = 7 + 5;
let y = 10 - 3;
let z = 4 * 6;
let w = 20 / 4;

console.log(x); // 12
console.log(y); // 7
console.log(z); // 24
console.log(w); // 5

//esercizio 7 operatore modulo
let resto = 17 % 3;
console.log(resto); // 2

//esercizio 8 operatore di incremento
let punti = 50;
punti += 10; // punti = punti + 10
console.log(punti); // 60

//esercizio 9 confronti
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 7);
console.log(8 !== "8");

//esercizio 10 condizioni e stampa se maggiorenne o minorenne
let eta = 20;
if (eta >= 18) {
  console.log("maggiorenne");
} else {
  console.log("minorenne");
}

//esercizio 11 stampa messaggio in base al voto
let voto = 30;
if (voto >= 18) {
  console.log("Ottimo");
} else if (voto < 18) {
  console.log("insufficiente");
}

//esercizio 12 stampa messaggio in base all'ora
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

//esercizio 17 stampa la somma dei numeri da 1 a 100
let somma = 0;
for (let i = 1; i <= 100; i++) {
  somma++;
  console.log(somma);
}

//esercizio 18 funzione che stampa ciao
let ciao = "ciao";
function saluta() {
  console.log(ciao);
}
saluta();

//esercizio 19 funzione che somma due numeri
function sommaDueNumeri(num1, num2) {
  return num1 + num2;
}
console.log(sommaDueNumeri(5, 10));

//esercizio 20 funzione che moltiplica due numeri
function moltiplicaDueNumeri(num1, num2) {
  return num1 * num2;
}
console.log(moltiplicaDueNumeri(5, 10));

//esercizio 21 funzione che controlla se un numero è pari o dispari
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // true

//esercizio 22 funzione che calcola il fattoriale di un numero
function quadrato(num) {
  return num * num;
}
console.log(quadrato(5)); // 25

//esercizio 23 funzione che si presenta
function presentati(nome, eta) {
  return `Ciao, mi chiamo ${nome} e ho ${eta} anni.`;
}
console.log(presentati("Davide", 30)); // Ciao, mi chiamo Mario e ho 30 anni.

//esercizio 24 array di frutti e stampa il primo elemento
let frutti = ["mela", "banana", "pera"];
console.log(frutti[0]); // mela

//esercizio 25 aggiunge un frutto alla fine dell'array
frutti.push("kiwi");
console.log(frutti); // ["mela", "banana", "pera", "kiwi"]

//esercizio 26 rimuove l'ultimo frutto dall'array
frutti.pop();
console.log(frutti); // ["mela", "banana", "pera"]

//esercizio 27 stampa tutti i frutti con un ciclo
for (let i = 0; i < frutti.length; i++) {
  console.log(frutti[i]);
}

//esercizio 28 stampa la lunghezza dell'array
console.log(frutti.length); // 3

//esercizio 29 stampa un oggetto che rappresenta un'auto
let object = {
  marca: "Toyota",
  modello: "Corolla",
  anno: 2020,
};
console.log(object);

//esercizio 30 stampa in console solo marca e anno
console.log(object.marca); // Toyota
console.log(object.anno); // 2020

//esercizio 31 aggiunge un metodo descrivi che stampa una descrizione
object.descrivi = function () {
  return "Questa auto è una Fiat Panda del 2005";
};
console.log(object.descrivi());

//esercizio 32 interazione con prompt
let nomeUtente = prompt("Inserisci il tuo nome:");
console.log(`Ciao, ${nomeUtente}!`);

//esercizio 33 calcola il quadrato di un numero inserito dall'utente
let numeroRandom = prompt("Inserisci un numero");
alert(`Il quadrato di ${numeroRandom} vale ${numeroRandom * numeroRandom}`);

//mini progetto 1 somma di due numeri inseriti dall'utente
let numeroPrimo = prompt("Inserisci il primo numero");
let numeroSecondo = prompt("Inserisci il secondo numero");
alert(
  `La somma di ${numeroPrimo} e ${numeroSecondo} vale ${
    parseInt(numeroPrimo) + parseInt(numeroSecondo)
  }`
);

//mini progetto 2 saluta più persone
let array1 = ["Luca", "Marco", "Giovanni"];
for (let i = 0; i < array1.length; i++) {
  console.log(`Salve, ${array1[i]}!`);
}

//mini progetto 3 studente e voto
let studente = {
  nome: "Mario",
  cognome: "Rossi",
};
alert(`${studente.nome} ha preso 28`);

//mini progetto 4 funzione che trasforma una stringa in maiuscolo
function maiuscolo(stringa) {
  return stringa.toUpperCase();
}
console.log(maiuscolo("ciao")); // "CIAO"

//mini progetto 5 funzione che calcola il quadrato di ogni numero in un array
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function quadratoArray(arr) {
  let risultati = [];
  for (let i = 0; i < arr.length; i++) {
    risultati.push(arr[i] * arr[i]);
  }
  return risultati;
}
console.log(quadratoArray(numeri)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
