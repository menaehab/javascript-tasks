let win = document.getElementById("google");
win.onclick = function () {
  window.open(
    "https://www.google.com",
    "_blank",
    `width=400,height=400,left=800,top=800,resizable=yes,scrollbars=yes`
  );
};
