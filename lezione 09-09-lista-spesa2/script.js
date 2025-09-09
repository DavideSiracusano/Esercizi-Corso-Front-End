let input = document.getElementById("item-input");
let input2 = document.getElementById("quantity-input");
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
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      items.splice(items.indexOf(item), 1);
      localStorage.setItem("items", JSON.stringify(items));
    });
  });
}

loadItems();

button.addEventListener("click", function () {
  if (input.value !== "" && input2.value !== "") {
    items.push(`${input.value} quantità:  ${input2.value}`);
    localStorage.setItem("items", JSON.stringify(items));
    loadItems();
    input.value = "";
    input2.value = "";
  } else {
    return;
  }
});
