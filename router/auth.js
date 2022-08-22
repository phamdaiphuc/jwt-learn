const authController = require("../controller/authController");

//DAM NHIEN VIEC DANG KY VA DANG NHAP 
const router=require("express").Router();
//REGISTER
router.post("/register",authController.registerUser);
//LOGIN 
router.post("/login",authController.loginUser);
//GET ALL JSON IN USER 
router.get("/show_user",authController.showallJson);

module.exports = router;