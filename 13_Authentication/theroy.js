/* SSR (SERVER SIDE RENDERING): is just a technique used in web development where 
the server generates the HTML content of a web page and sends it to the client's browser. 
*/

// to use SSR, in node.js, we can use the res.send() method to send HTML content directly from the server to the client.
//but its not a good practice to send HTML content directly from the server, as it can make the code harder to maintain and scale.
//also if the ui/ux is complex, it can be difficult to manage the HTML content directly in the server code.

// so , we can use template engines like ejs, pug, handlebars etc. to generate HTML content dynamically on the server side and send it to the client.

// we use ejs template engine in this project, as it is simple and easy to use.

// to use ejs(embedded JavaScript), we need to install it first, by running the following command in the terminal:
// npm install ejs

// then we need to set the view engine to ejs, by adding the following line of code in the index.js file:

// app.set("view engine", "ejs");

// then we need to create a views folder in the root directory, and create a file named index.ejs in it, which will be our template file.

// then we can use the res.render() method to render the template file and send it to the client, instead of using res.send() method.