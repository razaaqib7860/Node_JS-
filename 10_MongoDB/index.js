
const express = require("express");
const app = express();
const fs= require("fs");
const users = require("./MOCK_DATA.json");

//REQUIRE Mongoose:
const mongoose= require("mongoose");

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/test_app_1')
.then(()=>console.log('MongoDB Connected'))
.catch(err=> console.log('Mongo Error',err));

//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true, // means its mandatory to give this data
    },
    lastName:{
        type:String,
    }
    email:{
        type : String,
        required : true,
        unique: true, // means its must be unique email id
    },
    jobTitle:{
        type : String,
    },
    gender:{
        type : String,
    },
})
//model
const User = mongoose.model("user",userSchema);

//MIDDLEWARE : 
app.use(express.urlencoded({extended:false}));

app.post("/api/users", (req, res) => { 
    const newUser = { id: users.length + 1, ...req.body };

  if(!newUser || !newUser.first_name || !newUser.last_name || !newUser.email || !newUser.gender|| !newUser.job_title){
   return res.status(400).json({error:"All Fields are requried"}); // shows error:400 Bad Request

  }
  console.log(newUser);
  users.push(newUser);
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {

    if (err) return res.status(500).json({ status: "error", message: "Unable to save user" }); //its show status if there is error in server
    return res.status(201).json({ status: "success", id: users.length+1 }); // shows 201:Created, when id created

  });
});


// Use app.route() multiple HTTP methods to group GET, PATCH, DELETE handlers for the same resource path.
 app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
     if(!user){return res.status(404).json({error:"user not found"}) }
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
