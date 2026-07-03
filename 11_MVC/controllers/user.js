const User=require("../models/user");

//get all users
async function HandleGetAllUser(req,res) {
  const allDBUsers= await User.find(); // it will return all the users from the database;
  return res.status(200).json(allDBUsers);
}
//get user by id
async function HandleGetUserById(req,res) {
      const user= await User.findById(req.params.id); // it will return the user with the given id from the database;
     if(!user){return res.status(404).json({error:"user not found"}) }
    res.json(user);
}
//create user
async function HandleCreateUser(req,res) {
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender|| !body.job_title){
     return res.status(400).json({error:"All Fields are requried"}); // shows error:400 Bad Request
    }
    await User.create(body); // it will create a new user in the database;
    return res.status(201).json({msg:"User Created"});
}
//update user
async function HandleUpdateUser(req,res) {
    await User.findByIdAndUpdate(req.params.id,req.body); // it will update the user with the given id from the database;
    return res.json({ status: "done", message: "User updated" });
}
//delete user
async function HandleDeleteUser(req,res) {
    await User.findByIdAndDelete(req.params.id); // it will delete the user with the given id from the database;
    return res.json({ status: "done", message: "User deleted" });
}

module.exports = {HandleGetAllUser,HandleGetUserById,HandleCreateUser,HandleUpdateUser,HandleDeleteUser};