const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs= require("fs");
app.use(express.urlencoded({extended: false}));

app.post("/", (req, res) => {
  const newUser = req.body;
  users.push({id:users.length+1 , ...newUser});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
      return res.json({ status: "pending"});
  })
});

app.listen(6000);