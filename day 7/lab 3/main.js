const newPost = {
  title: "foo",
  body: "bar",
  userId: 1
};
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url, {
  method: "POST",
  body: JSON.stringify(newPost)
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
