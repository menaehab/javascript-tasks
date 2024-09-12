$(function () {
  $.getJSON(
    "https://dummyjson.com/recipes?limit=30&skip=10&select=name,image",
    function (data) {
      var content = "";
      for (let x in data.recipes) {
        content += "<p>" + data.recipes[x].name + "</p>";
        content +=
          "<img src='" +
          data.recipes[x].image +
          "' width='100' height='100' />";
      }
      $("#container").html(content);
    }
  );
});
