let l = parseInt(prompt("start"));
let r = parseInt(prompt("end"));
for (let i = l; i <= r; i++) {
  if (i & 1) console.log(i);
}
