let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9
};
// ====================================== //

let a = document.getElementById("in");
for (const i in array) {
  a.innerHTML += i + " ";
}
a.innerHTML += "<br>";
for (const i in object) {
  a.innerHTML += i + " ";
}
a.innerHTML += "<br>";
for (const i in object) {
  a.innerHTML += object[i] + " ";
}

// ====================================== //

let b = document.getElementById("of");
for (const i of array) {
  b.innerHTML += i + " ";
}
b.innerHTML += "<br>";
for (const i of Object.keys(object)) {
  b.innerHTML += i + " ";
}
b.innerHTML += "<br>";
for (const i of Object.values(object)) {
  b.innerHTML += i + " ";
}

// ====================================== //

let c = document.getElementById("each");
array.forEach((num) => {
  c.innerHTML += num + " ";
});
c.innerHTML += "<br>";
Object.keys(object).forEach((obj) => {
  c.innerHTML += obj + " ";
});
c.innerHTML += "<br>";
Object.values(object).forEach((obj) => {
  c.innerHTML += obj + " ";
});

// ====================================== //

/*
  for...in
    -> Iterates over the keys
  for...of
    -> Iterates over the values
  forEach()
    -> callback each element without break or continue
*/
