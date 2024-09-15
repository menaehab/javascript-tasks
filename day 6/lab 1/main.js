let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ====================================== //

let a = document.getElementById("filter");
a.innerHTML = array.filter((num) => num % 2 === 1).join(", ");

// ====================================== //

let b = document.getElementById("foreach");
let evenNum = [];
array.forEach((num) => {
  if (num % 2 === 0) evenNum.push(num);
});
b.innerHTML = evenNum.join(", ");

// ====================================== //

let c = document.getElementById("map");
let mappedNum = array.map((num) => Math.sqrt(num).toPrecision(2));
c.innerHTML = mappedNum.join(", ");

// ====================================== //
let d1 = document.getElementById("normal-function");
let d2 = document.getElementById("arrow-function");
let user1 = {
  name: "John",
  getName: function () {
    d1.innerHTML = this.name;
  }
};
let user2 = {
  name: "jae",
  getName: () => {
    d2.innerHTML = this.name;
  }
};
user1.getName();
user2.getName(); // undefined

// ====================================== //
