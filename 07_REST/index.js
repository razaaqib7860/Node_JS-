const express = require("express");
const app = express();

// Use express.json() so the server can parse JSON request bodies.
// This is required for POST, PATCH, and DELETE requests that send JSON.
app.use(express.json());

const users = require("./MOCK_DATA.json");

// Simple HTML route for browser demo
app.get("/users", (req, res) => {
  const html = `<ul>${users.map(user => `<li>${user.first_name}</li>`).join("")}</ul>`;
  res.send(html);
});


//####### REST API routes ########//

// Task 1: List all users as JSON
// Example: GET http://localhost:8000/api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Task 2: Get a single user by ID
// Example: GET http://localhost:8000/api/users/1
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user);
});

// Task 3: Create a new user
// Use Postman or another API client to send POST requests with a JSON body.
// Example body: { "first_name": "Alice", "last_name": "Smith", "email": "alice@example.com" }
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  return res.json({ status: "pending", message: "Create user logic goes here", data: newUser });
});

// Task 4: Update user by ID
// Example: PATCH http://localhost:8000/api/users/1
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;
  return res.json({ status: "pending", message: "Update user logic goes here", id, updates });
});

// Task 5: Delete user by ID
// Example: DELETE http://localhost:8000/api/users/1
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  return res.json({ status: "pending", message: "Delete user logic goes here", id });
});

app.listen(8000, () => console.log("Server started at http://localhost:8000"));




//############################//

// Use app.route() when multiple HTTP methods share the same base route path.
// This is especially useful when you want to group GET, PATCH, DELETE handlers
// for the same resource path.
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

