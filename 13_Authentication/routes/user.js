const express = require("express");
const router = express.Router();
const newUserController = require("../controllers/user");

//signup
router.get("/signup",(req,res)=>{
    return res.render("register");
});
router.post("/signup",newUserController.registerUser);

//login
router.get("/login", (req,res)=>{
    return res.render("login")
});
router.post("/login",newUserController.loginUser);

module.exports = router;