let s = prompt("enter a string");
let e = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "e") {
    e++;
  }
}
document.write(e);
