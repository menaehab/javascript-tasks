let users = [];

function fetchUsers() {
  const url = "https://dummyjson.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      users = data.users;
      let select = document.getElementById("user");
      users.forEach((user) => {
        let option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.firstName;
        select.appendChild(option);
      });
      document.getElementById("show").disabled = false;
    })
    .catch((error) => console.error("Error fetching users:", error));
}
function show() {
  let id = document.getElementById("user").value;
  if (id) {
    let selectedUser = users.find((user) => user.id == id);
    let details = document.getElementById("details");
    details.innerHTML = `<p>ID: ${selectedUser.id}</p>
                        <p>Name: ${selectedUser.firstName} ${selectedUser.lastName}</p>
                        <p>Email: ${selectedUser.email}</p>
                        <img src="${selectedUser.image}" alt="User Image">`;
  }
}
document.getElementById("show").addEventListener("click", show);
fetchUsers();
