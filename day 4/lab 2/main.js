let btn = document.getElementById("add");
btn.onclick = function () {
  var input = document.getElementById("input");
  var text = input.value;
  if (text !== "") {
    let para = document.createElement("h3");
    para.innerHTML = text;
    document.getElementById("task-list").appendChild(para);
    input.value = "";
  }
};
