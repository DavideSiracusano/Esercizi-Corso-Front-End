let input = document.getElementById("item-input");
let button = document.getElementById("add-button");
let list = document.getElementById("lista-spesa");

let items = JSON.parse(localStorage.getItem("items")) || [];

let value = input.value;

function loadItems() {
  list.innerHTML = "";
  items.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

loadItems();

button.addEventListener("click", function () {
  if (input.value !== "") {
    items.push(input.value);
    localStorage.setItem("items", JSON.stringify(items));
    loadItems();
    input.value = "";
  } else {
    return;
  }
});
