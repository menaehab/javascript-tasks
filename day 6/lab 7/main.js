let a = new Set(["john", "joe", "jae"]);
let b = new Set(["john", "joe", "jae"]);

// ====================================== //

let x = document.getElementById("repeat");
function union(setA, setB) {
  return new Set([...setA, ...setB]);
}
let uni = union(a, b);
let result = Array.from(uni).join(", ");
x.innerHTML = result; // answer is : No i can't

// ====================================== //

let y = document.getElementById("each");
for (const i of a) {
  y.innerHTML += i + " ";
}
