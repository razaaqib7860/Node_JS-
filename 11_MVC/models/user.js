const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true, // means its mandatory to give this data
    },
    last_name:{
        type:String,
    },
    email:{
        type : String,
        required : true,
        unique: true, // means its must be unique email id
    },
    gender:{
        type : String,
    },
     job_title:{
        type : String,
    },
},
{ timestamps:true}); // it will automatically add createdAt and updatedAt fields in the document

const User = mongoose.model("user",userSchema); // User is a model name , where user is a collection name in the database, and userSchema is a schema name which we have defined above;

module.exports = User;
