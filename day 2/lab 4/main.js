let arr = [];
for (let i = 1; i <= 5; i++) {
  arr[i - 1] = parseInt(prompt("number" + i));
}
document.write("<h3> <span style='color:red'>you have entered the values of </span> ");
document.write(
    arr +
    "</h3>"
);
arr.sort();
arr.join(' , ');
document.write("<h3><span style='color:red'>your value after being sorted descending </span> ");
document.write(
    arr +
    "</h3>"
);
arr.reverse();
document.write("<h3><span style='color:red'>your value after being sorted ascending </span> ");
document.write(
    arr +
    "</h3>"
);
