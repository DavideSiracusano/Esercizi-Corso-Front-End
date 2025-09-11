//manipolazione dom
const btn = document.getElementById("run");
const out = document.getElementById("output");

// studenti di esempio
const studenti = [
  { nome: "Mario Rossi", voto: 8, presente: true },
  { nome: "Luigi Bianchi", voto: 5, presente: false },
  { nome: "Anna Verdi", voto: 9, presente: true },
  { nome: "Beatrice Neri", voto: 6, presente: true },
  { nome: "Carlo Blu", voto: 4, presente: true },
  { nome: "Davide Rosa", voto: 7, presente: false },
  { nome: "Elena Gialli", voto: 10, presente: true },
  { nome: "Federico Viola", voto: 3, presente: false },
  { nome: "Giorgia Azzurra", voto: 8, presente: true },
  { nome: "Lorenzo Marrone", voto: 2, presente: false },
  { nome: "Martina Rosa", voto: 6, presente: true },
  { nome: "Simone Nero", voto: 5, presente: true },
];

// funzione per mostrare output
function log(titolo, dato) {
  const h4 = document.createElement("h4");
  const pre = document.createElement("pre");
  h4.textContent = titolo;
  pre.textContent = JSON.stringify(dato, null, 2);
  out.append(h4, pre);
}
btn.addEventListener("click", () => {
  out.innerHTML = ""; // reset output
  // qui inserire gli step...
  studenti.forEach((studente) => {
    studente.voto >= 6 ? log("Promosso", studente) : log("Bocciato", studente);
  });
});

//spread per aggiungere utenti senza modificare array originale
const tutti = [
  ...studenti,
  { nome: "Giovanni Bianchi", voto: 9, presente: false },
  { nome: "Giovanna Rossi", voto: 10, presente: true },
];

console.log("Tutti", tutti);

//funzione rest che ritorna array di nomi
function raggruppaNomi(...nomi) {
  return nomi;
}

console.log("Nomi", raggruppaNomi("Luca", "Marco", "Giovanni"));

//trasforma array tutti in stringa con map
const tuttiStringa = tutti.map((studente) => studente.nome);
console.log("Nomi", tuttiStringa);

//filtrare solo studenti presenti con filter
const filterStudenti = tutti.filter((studente) => studente.presente);
console.log("Presenti", filterStudenti);

//foreach per stampare tutti gli studenti se presenti o meno

tutti.forEach((studente) => {
  if (studente.presente === true) {
    const li = document.createElement("li");
    li.textContent = `${studente.nome} - ✔️`;
    out.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = `${studente.nome} - ❌`;
    out.appendChild(li);
  }
});

//destructuring per stampare tutti gli studenti
function presentaStudenti({ nome, voto, presente }) {
  console.log(`ciao, sono ${nome},ho ${voto} e sono ${presente}`);
}

tutti.map(presentaStudenti);

//form per rimuovere studenti

const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const studente = tutti.find((studente) => studente.nome === input.value);
  if (studente) {
    tutti.splice(tutti.indexOf(studente), 1);
    input.value = "";
  }
  console.log(tutti);
});
