//stampa i colori
let array = ["rosso", "verde", "blu"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//aggiungi giallo e arancione
let array1 = ["rosso", "verde", "blu"];
array1.push("giallo", "arancione");
console.log(array1);

//se include verde, stampa l'indice del colore verde
if (array1.includes("verde")) {
  console.log(array1.indexOf("verde"));
}

//cambia il colore seconda posizione
array1[1] = "viola";
console.log(array1);

//elimina il primo colore
array1.shift();
console.log(array1);
