const express= require("express");
const app = express();
const fs=require("fs");

const users = require('./MOCK_DATA.json')

//Routes

app.get("/users",(req,res)=>{
    res.json(users);
});

app.listen(8000, ()=> console.log('Server Started at Port 8000'));