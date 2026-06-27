const express = require("express");
const app = express();

const users = require("./MOCK_DATA.json");


// Task 1: List all users as JSON
// Example: GET http://localhost:8000/api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Use Postman or another API client to send POST requests with a JSON body.
// Example body: { "first_name": "Alice", "last_name": "Smith", "email": "alice@example.com" }
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  return res.json({ status: "pending"});
});


// Use app.route() multiple HTTP methods to group GET, PATCH, DELETE handlers for the same resource path.
app.route("/api/users/:id")

  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    res.json(user);
  })

  .patch((req, res) => {
    return res.json({ status: "pending", message: "Update user logic goes here" });
  })

  .delete((req, res) => {
    return res.json({ status: "pending", message: "Delete user logic goes here" });
  });

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
