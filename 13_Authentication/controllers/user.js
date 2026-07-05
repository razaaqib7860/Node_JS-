const User=require("../models/user");

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
        console.log(req.body);
    const {email,password}=req.body;
    const userFound=await User.findOne({email,password});
    if(!email || !password){
    return res.status(400).json({
        error: "Email and Password are required"
     });
    }
    if(!userFound){
        return res.status(401).json({error:"User not Found"})
    }
    return res.render("home");
}

module.exports={registerUser,loginUser};