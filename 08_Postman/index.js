const express = require("express");
const app = express();
const fs= require("fs");

const users = require("./MOCK_DATA.json");

//########### for use POSTMAN the PORT should be PUBLIC. ###########//

//MIDDLEWARE : 
app.use(express.urlencoded({extended:false}));
//app.use(express.json());

// Task 1: List all users as JSON
// Example: GET http://localhost:8000/api/users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Use Postman or another API client to send POST requests with a JSON body.
// Example body: { "first_name": "Alice", "last_name": "Smith", "email": "alice@example.com" }

app.post("/api/users", (req, res) => { 
  const newUser = { id: users.length + 1, ...req.body };
  console.log(newUser);
  users.push(newUser);
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
    if (err) return res.status(500).json({ status: "error", message: "Unable to save user" });
    return res.json({ status: "success", id: users.length+1 });
  });
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
    const id = Number(req.params.id);
    const idx = users.findIndex(user => user.id === id);
    if (idx === -1) return res.status(404).json({ status: "error", message: "User not found" });
    users.splice(idx, 1); // DELETE 1 element from idx 
    return res.json({ status: "done", message: "User deleted" });
  });

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
