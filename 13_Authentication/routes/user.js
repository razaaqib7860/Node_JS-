const express = require("express");
const router = express.Router();
const newUserController = require("../controllers/user");

//post
router.post("/",newUserController.registerUser);

router.get("/signup",(req,res)=>{
    return res.render("register");
});
router.get("/login", newUserController.loginUser);

module.exports = router;