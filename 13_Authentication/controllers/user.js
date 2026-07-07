
const User=require("../models/user");
const {setUser , getUser }=require("../service/auth");
const jwt=require("jsonwebtoken");

async function registerUser(req,res){
    const {fullName,email,password}=req.body;

    if(!fullName || !email || !password){
        return res.status(400).json({error:"All fields are required"});
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({error:"User already exists"});
    }
    await User.create({
        fullName,
        email,
        password
    });
    return res.render("home");
}

async function loginUser(req,res){
    const {email,password}=req.body;

    if(!email || !password){
    return res.status(400).json({
        error: "Email and Password are required"
     });
    }

    const userFound=await User.findOne({email,password});

    if(!userFound){
        return res.status(401).json({error:"User not Found"})
    }

    const token= setUser(userFound)
    res.cookie("uid",token);
    return res.redirect("/urlShortner");
}

module.exports={registerUser,loginUser};