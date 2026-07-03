const express = require("express");
const router = express.Router();

//Require Router Controller:
//### const {handleCreateUser, handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById} = require("../controllers/userController");
// you have to access the functions like this: router.get("/api/users", handleGetAllUsers);

//OR
const userController=require("../controllers/userController");
const { HandleCreateUser } = require("../controllers/user");
//you have to access the functions of userController like this: router.get("/api/users", userController.handleGetAllUsers);

//ROUTERS:
router.route("/api/users")
  //GET
  .get(userController.handleGetAllUsers)
  //POST
  .post(userController.handleCreateUser);

 router.route("/api/users/:id")
  //GET
  .get(userController.handleGetUserById)
  //PATCH
  .patch(userController.handleUpdateUserById)
  //PUT
  .put(userController.handleUpdateUserById)
  //DELETE 
  .delete(userController.handleDeleteUserById);

module.exports = router;