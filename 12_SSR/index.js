//install nanoid package for generating unique short URLs;

const express = require("express");
const app = express();

const connectMongoDb = require("./connection");
connectMongoDb("mongodb://127.0.0.1:27017/url_shortner");

const urlRoutes = require("./routes/url");
const { connect } = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SSR (Server Side Rendering) is a technique used in web development where the server generates the HTML content of a web page and sends it to the client's browser. This approach allows for faster initial page loads and better SEO, as search engines can easily index the fully rendered HTML. In contrast, client-side rendering relies on JavaScript to build the page in the browser, which can lead to slower load times and potential SEO challenges. SSR is commonly used in frameworks like Next.js and Nuxt.js, enhancing user experience by providing a more immediate view of the content.
app.get("/test", (req, res) => {
  return res.send("<h1>SSR (Server Side Rendering)</h1>" )
  });

app.use("/url",urlRoutes);

app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
