let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8, 9];
let array3 = [...array1, ...array2];
document.getElementById("spread").innerHTML = array3;
