let num1 = prompt("Temperature");
let num2 = prompt("actualFeel");
if (num1 >= 25 && num1 <= 30 && num2 >= 25 && num2 <= 30) {
  alert("normal");
} else if (num1 < 25 && num2 < 25) {
  alert("Cold");
} else if (num1 > 30 && num2 > 30) {
  alert("Hot");
} else {
  alert("unknown, can’t detect");
}
