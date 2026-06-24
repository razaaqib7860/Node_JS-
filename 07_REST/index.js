const express= require("express");
const app = express();
const fs=require("fs");

const users = require('./MOCK_DATA.json')

//Routes

app.get("/users",(req,res)=>{
    const html=`<ul> ${users.map(user=>`<li>${user.first_name}</li>`).join("")} </ul>`
    res.send(html);
})
//OR(both return same thing)

// app.get("/users", (req, res) => {      /// Returns users data (auto-converted to JSON)
//     res.send(users);
// });

//###### REST API ######//

//Task 1: List all users
app.get("/api/users", (req, res) => {     /// Returns users data as JSON (recommended for APIs)
    res.json(users);
});

//Task 2: GET the user with ID
app.get("/api/users/:id", (req, res)=>{     // :id => variable dyanimic
    const id= Number(req.params.id);
    const user= users.find((user)=>user.id===id);
    res.json(user);
})
//or
// app.get("/users/:id", (req, res)=>{     // :id => variable dyanimic
//     const id= Number(req.params.id);
//     const user= users.find((user)=>user.id===id);
//     res.send(user);
// })

//Task 3: POST a new user 
app.post("/api/users", (req,res)=>{
    //TODO: Create new User                  //######## as browser by default use GET , 
    return res.json({status:"pending"});     // So, we cant use POST,PATCH,PUT and DELETE here,
                                             // we use ## POSTMAN ## for that..
})

//Task 4: Update user by id
app.patch("/api/users/:id", (req,res)=>{
    //TODO: Update User by id              
    return res.json({status:"pending"});                                    
})

//Task 5: Delete user by id
app.delete("/api/users/:id", (req,res)=>{
    //TODO: DELETE User by id              
    return res.json({status:"pending"});                                    
})


//#### Routing a single route .. when many http method work on a single route, use this
// lets take a route where you have to perform all : "/api/users/1/:id"
app.route("/api/users/1/:id")
.get((req, res)=>{   
    const id= Number(req.params.id);
    const user= users.find((user)=>user.id===id);
    res.json(user);
})
.patch((req,res)=>{
    return res.json({status:"pending"});
})N
.delete((req,res)=>{
    return res.json({status:"pending"});
})


app.listen(8000, ()=> console.log('Server Started at Port 8000'));