const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log("Request received!");  // it will be printed in the console when a request is made to the server
    res.end("Hello World!");// it will be printed in the browser when a request is made to the server
    // console.log(req);    // it will be printed in the console when a request is made to the server, it will show the details of the request made to the server like method, url, headers etc
});

const myserver = http.createServer((req,res)=>{

    const log=`${new Date().toLocaleString()}, $:New Request Received!\n`;
    fs.appendFile("server.log",log,(err)=>{   // it will append the log in server.log file, if the file does not exist it will create a new file and append the log in it, if the file already exists it will append the log in it without overwriting the existing log
    res.end("Hello World 2 !");});
 }); 

 const server3 =http.createServer((req,res)=>{
    const data=`${new Date().toLocaleString()}: ${req.url}: / ${req.method} New Request Received!\n`;
    fs.appendFile("server3.log",data,(err)=>{
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
            case "/signup":                     // it will handle the request made to the signup route (/signup) and respond with "Signup Page"
                if(req.method==="POST"){            // it will check if the request method is POST, if it is POST then it will respond with "Signup Successful!" otherwise it will respond with "Signup Page"
                    res.end("Signup Successful!");
                }else{
                    res.end("Signup Page");
                }
                break;
            default:                             // it will handle the request made to any other route and respond with "Page Not Found"
                res.end("Page Not Found");
        }
        });
 })

server.listen(3000,()=>{// it will start the server and listen on port 3000
    console.log("Server is running on port 3000");
}); //when we run this code and go to http://localhost:3000/ in our browser, we will see "Hello World!" displayed on the page. This is because the server is listening on port 3000 and when a request is made to that port, it responds with "Hello World!" using the res.end() method.

myserver.listen(3001,()=>{// it will start the server and listen on port 3001
    console.log("Server 2 is running on port 3001");
});
server3.listen(3002,()=>{
    console.log("Server 3 is running on port 3002");
});