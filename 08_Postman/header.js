const express = require("express");
const app = express();
const fs= require("fs");
const users = require("./MOCK_DATA.json");


app.get("/api/users", (req, res) => {
    res.setHeader("X-myName", "RAZA")// set a header , it add a header to response
    console.log(req.headers); // its read and print all the headers
   console.log(req.get("myage"))// it will print a specific data of the header
  res.json(users);
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
