let arr = [];
for (let i = 1; i <= 3; i++) {
  arr[i - 1] = parseInt(prompt("number" + i));
}
document.write("<h3> <span style='color:red'>sum of the 3 values</span> ");
document.write(
    arr[0] +
    " + " +
    arr[1] +
    " + " +
    arr[2] +
    " = " +
    (arr[0] + arr[1] + arr[2]) +
    "</h3>"
);
document.write("<h3><span style='color:red'>Multiplication of the 3 values</span> ");
document.write(
    arr[0] +
    " * " +
    arr[1] +
    " * " +
    arr[2] +
    " = " +
    arr[0] * arr[1] * arr[2] +
    "</h3>"
);
document.write("<h3><span style='color:red'>Division of the 3 values</span> ");
document.write(
    arr[0] +
    " / " +
    arr[1] +
    " / " +
    arr[2] +
    " = " +
    arr[0] / arr[1] / arr[2] +
    "</h3>"
);
