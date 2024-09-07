let s = prompt("enter a string");
let r = s.split("").reverse().join("");
if (s == r) alert("Palindrome");
else alert("Not Palindrome");