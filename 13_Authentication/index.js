const express = require("express");
const app = express();

const connectMongoDb = require("./connection");
connectMongoDb("mongodb://127.0.0.1:27017/url_shortner");

const Url=require("./models/url"); 
const urlRoutes = require("./routes/url");
const static = require("./routes/statics");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  return res.send("<h1>SSR (Server Side Rendering)</h1>" )
  });

  //Set EJS as the view engine
  app.set("view engine", "ejs");  
  app.set("views", "./views"); 

  app.use("/UrlShortner",static);
  app.use("/url",urlRoutes);
  app.use("/user",userRoutes);

const PORT = 4003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});