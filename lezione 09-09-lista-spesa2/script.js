// manipolazione dom degli elementi
let input = document.getElementById("item-input");
let input2 = document.getElementById("quantity-input");
let button = document.getElementById("add-button");
let list = document.getElementById("lista-spesa");
let select = document.getElementById("category");

// valore input
let value = input.value;

// Prende items nello storage locale
let items = JSON.parse(localStorage.getItem("items")) || [];

// Span per totale
let totalSpan = document.createElement("span");
document.body.appendChild(totalSpan);

// Funzione per calcolare totale quantità, il totale è uguale al totale + la quantità
function total() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += Number(items[i].quantità); // converto in numero
  }
  return total;
}

// Funzione per caricare items
function loadItems() {
  //svuota campo lista
  list.innerHTML = "";
  //funzione per ciclare items e crea li appendendoli alla lista
  items.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = `${item.prodotto} x ${item.quantità} - ${item.categoria}`;
    list.appendChild(li);

    // Se è checkato → barrato, lo segna
    if (item.completato) {
      li.style.textDecoration = "line-through";
    }
    //crea bottone delete
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    li.appendChild(deleteButton);

    //funzione per eliminare item
    deleteButton.addEventListener("click", function () {
      items.splice(items.indexOf(item), 1);
      localStorage.setItem("items", JSON.stringify(items));
      loadItems();
    });

    //crea bottone check
    let checkButton = document.createElement("button");
    checkButton.textContent = "✓";
    checkButton.classList.add("check-button");
    li.appendChild(checkButton);

    //funzione per segnare item
    checkButton.addEventListener("click", function () {
      item.completato = !item.completato;
      localStorage.setItem("items", JSON.stringify(items));
      loadItems();
    });

    //crea span per totale rifacendosi alla funzione
    totalSpan.textContent = `il totale dei prodotti è: ${total()}`;
    totalSpan.classList.add("total");
  });
}

// Carica items
loadItems();

// Event listener per aggiungere item
button.addEventListener("click", function () {
  if (input.value !== "" && input2.value !== "") {
    items.push({
      prodotto: input.value,
      quantità: input2.value,
      categoria: select.value,
    });
    //salva items nel local storage
    localStorage.setItem("items", JSON.stringify(items));
    loadItems();

    //svuota input
    input.value = "";
    input2.value = "";
  } else {
    return;
  }
});
