// manipolazione dom html prendendo gli elementi tramite id
let input = document.getElementById("num-input");
let input2 = document.getElementById("num-input2");
let buttonPlus = document.getElementById("num-btn1");
let buttonMinus = document.getElementById("num-btn2");
let buttonTimes = document.getElementById("num-btn3");
let buttonDivide = document.getElementById("num-btn4");
let result = document.getElementById("result");

// funzione per il calcolo, nel caso plus = somma, minus = sottrazione, times = moltiplicazione, divide = divisione
function calc(operation) {
  switch (operation) {
    case "plus": {
      let num1 = parseInt(input.value);
      let num2 = parseInt(input2.value);
      let risultato = num1 + num2;
      input.value = "";
      input2.value = "";
      //template literal per mostrare il risultato
      result.textContent = `il risultato è: ${risultato}`;
      break;
    }
    case "minus": {
      let num1 = parseInt(input.value);
      let num2 = parseInt(input2.value);
      let risultato = num1 - num2;
      input.value = "";
      input2.value = "";
      result.textContent = `il risultato è: ${risultato}`;
      break;
    }
    case "times": {
      let num1 = parseInt(input.value);
      let num2 = parseInt(input2.value);
      let risultato = num1 * num2;
      input.value = "";
      input2.value = "";
      result.textContent = `il risultato è: ${risultato}`;
      break;
    }
    case "divide": {
      let num1 = parseInt(input.value);
      let num2 = parseInt(input2.value);
      let risultato = num1 / num2;
      input.value = "";
      input2.value = "";
      result.textContent = `il risultato è: ${risultato}`;
      break;
    }
  }
}

// event listener per i bottoni, al click esegue la funzione calc con il parametro corrispondente
buttonPlus.addEventListener("click", () => calc("plus"));
buttonMinus.addEventListener("click", () => calc("minus"));
buttonTimes.addEventListener("click", () => calc("times"));
buttonDivide.addEventListener("click", () => calc("divide"));
