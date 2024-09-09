let data = new URLSearchParams(window.location.search);
let firstName = data.get("firstName");
let lastName = data.get("lastName");
document.getElementById("data").innerHTML = firstName + " " + lastName;
