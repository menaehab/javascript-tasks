let text = prompt("Enter a string");
let isSensitive = confirm("Do you want to consider case sensitivity?");
let original = isSensitive ? text : text.toLowerCase();
let reversed = original.split("").reverse().join("");
if (original === reversed) {
  alert("Palindrome");
} else {
  alert("Not Palindrome");
}
