let name;
while (!name) {
  name = prompt("name");
}
let birth;
while (!birth || birth > 2010) {
  birth = parseInt(prompt("birth date"));
}
document.write(
  "name: " + name + "<br>birth: " + birth + "<br>Age: " + (2024 - birth)
);
