let i = 0;
let x = 1;

while (i < 100) {
  console.log(x);
  x++;
  i++;
}

while (i < 100) {
  console.log("Valor do X " + x);
  x++;
  i++;
}

function printMessage(message) {
  alert(message);
}

//printMessage("Seja Bem-vindo a Calculadora de Gorjeta ");

//---------------------------------------------

function sum(a, b) {
  return a + b;
}

console.log(10, 20);

function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let numOfPeople = document.getElementById("people").value;

  if ((bill == "") | (serviceQual == 0)) {
    alert("Por favor, preencha os valores");
    return;
  }

  if ((numOfPeople == "") | (numOfPeople <= 1)) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (bill * serviceQual) / numOfPeople;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
  document.getElementById("totaltip").style.display = "block";
  document.getElementById("container1").style.display = "block";
}

document.getElementById("container1").style.display = "none";
document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);
