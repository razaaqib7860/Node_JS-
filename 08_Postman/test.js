const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

app.use(express.urlencoded({extended: false}));

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  return res.json({ status: "pending"});
});

app.listen(9000);