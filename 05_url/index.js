const http = require("http"); // import http functionality from nodejs core module
const fs = require("fs"); // import fs functionality from nodejs core module
//npm i url // install url module from npm
const url = require("url"); // import url functionality from nodejs core module


 const server =http.createServer((req,res)=>{ 
    const data=`${new Date().toLocaleString()}: ${req.url}: New Request Received!\n`;
    // fs.writeFile("server.log",data,(err)=>{
    //     res.end("Hello World 3 !");
    // });
    const myUrl=url.parse(req.url,true); // parse the url and get the query parameters, it will return an object with the pathname and query parameters
                                         // (true: means it will parse the query parameters and return an object with the query parameters, false means it will return the query parameters as a string)
   
    console.log(myUrl); // log the parsed url object to the console 

    fs.appendFile("server.log",data,(err)=>{

       // switch(req.url){                       //(MulitRoute): multiple routes can be handled using switch case, we can also use if else statements to handle multiple routes,
                                               // but switch case is more efficient and easier to read and maintain
                                               // it will handle the request made to the root route (/) and respond with "Home Page"
                                                // it will handle the request made to the about route (/about) and respond with "About Page"
        
            switch(myUrl.pathname){             //now we are using myUrl.pathname instead of req.url to handle the routes, 
                                                //   because myUrl.pathname will give us the pathname of the url without the query parameters, 
                                                // so we can handle the routes without worrying about the query parameters
          
                case "/":                       
                res.end("Home Page");         
                break;

            case "/about":                            // it will handle the request made to the about route (/about) and respond with "About Page"
                const queryParams = myUrl.query.q;    // it will get the value of the query parameter 'q' from the url, for example if the url is /about?q=John then queryParams will be 'John'
                res.end(`Hi, ${queryParams}`);        // it will respond with "Hi, <query parameter value>" where <query parameter value> is the value of the query parameter 'q' in the url
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