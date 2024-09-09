let counter = 0;
let timer;
document.getElementById("start").onclick = function() {
    timer = setInterval(function () {
        counter++;
        document.getElementById("counter").innerHTML = counter;
    }, 1000);
};
document.getElementById("end").onclick = function() {
    clearInterval(timer);
}
