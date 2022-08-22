const middlewareController=require("../controller/middlewareController");
const userController = require("../controller/userController");
const useController=require("../controller/userController");

const router = require("express").Router();


//MIDDLEWARE VERIFY
router.get("/",middlewareController.verifyToken,userController.getallUser);



//DELETE USER
router.delete("/:id",useController.deleteUser)

module.exports=router;