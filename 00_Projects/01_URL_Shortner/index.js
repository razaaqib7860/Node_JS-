//install nanoid package for generating unique short URLs;

const express = require("express");
const app = express();

const connectMongoDb = require("./connection");
connectMongoDb("mongodb://127.0.0.1:27017/url_shortner");

const urlRoutes = require("./routes/url");
const { connect } = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/url",urlRoutes);

app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
