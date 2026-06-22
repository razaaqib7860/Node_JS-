//Install express using "npm i express"

const express = require("express"); //it is a framework for node.js which is used to build web applications easily and quickly. 
                                    // It is a minimal and flexible framework that provides a robust set of features for web and mobile applications. 
                                    // It allows us to handle routes, requests, and responses in a simple way.

const fs = require("fs");   
const app = express(); //it is a function which is used to create an express application. It is used to set up middleware and routing.

//now you dont have to handle the each switch case 
//#### now you dont have to use the HTTP MODULE to create a server, express will do it for you.

// app.get() is used to handle GET requests. It takes two arguments, the first one is the route and the second one is a callback function which will be executed when the route is matched.
app.get("/", (req, res) => {
    res.send("Hello World!"); //it is used to send a response to the client. It can send a string, an object, an array, etc.
});

// app.post() is used to handle POST requests. It takes two arguments, the first one is the route and the second one is a callback function which will be executed when the route is matched.
app.post("/", (req, res) => {
    res.send("New World!"); //it is used to send a response to the client. It can send a string, an object, an array, etc.
});

app.listen(3000,()=>{
    console.log("hii rest");
})