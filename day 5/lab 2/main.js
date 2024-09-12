function emailSubmit() {
  let email = document.getElementById("inpt").value;
  localStorage.email = email;
  alert("Email Saved");
  return false;
}
