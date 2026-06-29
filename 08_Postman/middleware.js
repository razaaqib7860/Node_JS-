const express = require("express");
const app = express();
const fs= require("fs");
const users = require("./MOCK_DATA.json");

// for use POSTMAN the PORT should be PUBLIC


//MIDDLEWARE : 
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
  console.log("hello from middleware 1")
  //return res.json("mw1 end")       // the mw1 return the output and request cant exucute furture
  next();                            //it will call the next function, means allwing the request to furture code to exucute
     //next();                                // if you dont call next function BY DEFAULT it will call the code just below them if no response trigger
})

app.use((req,res,next)=>{
  console.log("hello from middleware 1")
  //return res.json("mw2 end") // mw2 end and return the response
  next();// send request furture
})


//ROUTES
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => { 
  const newUser = { id: users.length + 1, ...req.body };
  console.log(newUser);
  users.push(newUser);
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
    return res.json({ status: "success", id: users.length+1 });
  });
});

app.listen(3000, () => console.log("Server started at http://localhost:3000"));
