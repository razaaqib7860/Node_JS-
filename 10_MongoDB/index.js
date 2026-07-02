
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
    first_name:{
        type : String,
        required : true, // means its mandatory to give this data
    },
    last_name:{
        type:String,
    },
    email:{
        type : String,
        required : true,
        unique: true, // means its must be unique email id
    },
    gender:{
        type : String,
    },
     job_title:{
        type : String,
    },
},
{ timestamps:true}); // it will automatically add createdAt and updatedAt fields in the document

//MODEL
const User = mongoose.model("user",userSchema); // User is a model name , where user is a collection name in the database, and userSchema is a schema name which we have defined above;

//MIDDLEWARE : 
app.use(express.urlencoded({extended:false}));

//POST
app.post("/api/users", async(req, res) => { 
  const body=req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender|| !body.job_title){
   return res.status(400).json({error:"All Fields are requried"}); // shows error:400 Bad Request
  }
//   const result= await User.create({   //// it will create a new user in the database;
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     job_title: body.job_title,
//     gender: body.gender
//   })

//OR
await User.create(body); // it will create a new user in the database;
  return res.status(201).json({msg:"User Created"});
});

app.get("/api/users", async(req, res) => {
  const allDBUsers= await User.find(); // it will return all the users from the database;
  return res.status(200).json({msg:"All Users",data:allDBUsers});
});

// Use app.route() multiple HTTP methods to group GET, PATCH, DELETE handlers for the same resource path.
 app.route("/api/users/:id")
  //GET
  .get(async(req, res) => {
    const user= await User.findById(req.params.id); // it will return the user with the given id from the database;
     if(!user){return res.status(404).json({error:"user not found"}) }
    res.json(user);
  })
  //PATCH
  .patch(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id,req.body); // it will update the user with the given id from the database;
   console.log(req.body);
    return res.json({ status: "done", message: "User updated" });
  })
  //PUT
  .put(async(req, res) => {
    await User.findByIdAndUpdate(req.params.id,req.body); // it will update the user with the given id from the database;
    return res.json({ status: "done", message: "User updated" });
  })
//DELETE
  .delete(async(req, res) => { 
    await User.findByIdAndDelete(req.params.id); // it will delete the user with the given id from the database;
    return res.json({ status: "done", message: "User deleted" });
  });
app.listen(3005, () => console.log("Server started at http://localhost:3005"));
