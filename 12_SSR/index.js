//install nanoid package for generating unique short URLs;

const express = require("express");
const app = express();

const connectMongoDb = require("./connection");
connectMongoDb("mongodb://127.0.0.1:27017/url_shortner");

const Url=require("./models/url"); 
const urlRoutes = require("./routes/url");
const static = require("./routes/statics");

//Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//####### S.S.R ########//
//SSR (Server Side Rendering) is a technique used in web development where the server generates the HTML content of a web page and sends it to the client's browser. This approach allows for faster initial page loads and better SEO, as search engines can easily index the fully rendered HTML. In contrast, client-side rendering relies on JavaScript to build the page in the browser, which can lead to slower load times and potential SEO challenges. SSR is commonly used in frameworks like Next.js and Nuxt.js, enhancing user experience by providing a more immediate view of the content.
app.get("/test", (req, res) => {
  return res.send("<h1>SSR (Server Side Rendering)</h1>" )
  });
  //its very difficult to render html in the browser using res.send() method, 
  //so we use ejs for server-side rendering
  //npm install ejs --save

  //Set EJS as the view engine
  app.set("view engine", "ejs");  
  app.set("views", "./views"); // Specify the directory for EJS templates

  //return all the urls in the database using SSR
  // app.get("/testSSR",async (req, res) => {
  //   const allUrl= await Url.find();
  //   return res.render("home", { urls: allUrl }); // Render the "home.ejs" template with the URLs
  // });

  app.use("/UrlShortner",static);
  // app.get("/testSSR/:shortUrl", async (req, res) => {
  //   const { shortUrl } = req.params;
  //   const UrlHistory = await Url.findOne({ shortUrl });
  //   res.render("home");
  // });

app.use("/url",urlRoutes);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});