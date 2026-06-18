const http = require("http"); // import http functionality from nodejs core module
const fs = require("fs"); // import fs functionality from nodejs core module

//npm i url // install url module from npm
const url = require("url"); // import url functionality from nodejs core module

 const server =http.createServer((req,res)=>{
    const data=`${new Date().toLocaleString()}: ${req.url}: New Request Received!\n`;
    fs.writeFile("server.log",data,(err)=>{
        res.end("Hello World 3 !");
    });
    fs.appendFile("server.log",data,(err)=>{
        switch(req.url){                       //(MulitRoute): multiple routes can be handled using switch case, we can also use if else statements to handle multiple routes, but switch case is more efficient and easier to read and maintain
            case "/":                          // it will handle the request made to the root route (/) and respond with "Home Page"
                                               // (/) means route of home page, when we go to http://localhost:3002/ in our browser, it will match the route (/) and respond with "Home Page"

                res.end("Home Page");         
                break;
            case "/about":                      // it will handle the request made to the about route (/about) and respond with "About Page"
                res.end("About Page");
                break;
            case "/contact":                     // it will handle the request made to the contact route (/contact) and respond with "Contact Page"
                res.end("Contact Page");
                break;
            default:                             // it will handle the request made to any other route and respond with "Page Not Found"
                res.end("Page Not Found");
        }
        });
 })
server.listen(3002,()=>{
    console.log("Server is running on port 3002");
});