const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

//REQUIRE Mongoose:
const connectMongoDb=require("./connections/index");

//REQUIRE ROUTER:
const userRouter=require("./routes/user");

//Connection
connectMongoDb('mongodb://127.0.0.1:27017/test_app_1');


//MODEL:just import the model from models folder
const User=require("./models/user");

//MIDDLEWARE : 
app.use(express.urlencoded({extended:false}));

//ROUTERS:
app.use("/api/users",userRouter); // it will use the userRouter for all the routes starting with /api/users
 
app.listen(3005, () => console.log("Server started at http://localhost:3005"));
