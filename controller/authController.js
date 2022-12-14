const User=require("../model/User");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const authController ={
    //REGISTER 
    registerUser: async(req,res)=>{
        try{
            const salt= await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password,salt);
            //CREATE NEW USER 
            const newUser= await new User({
                username:req.body.username,
                email:req.body.email,
                password: hashed,
            });
            //SAVE DATABASE
            const user = await newUser.save();
            res.status(200).json(user);

        }
        catch(err){
            res.status(500).json(err);
        }

    },
    //LOGIN
    loginUser: async(req,res)=>{
        try{
            const user= await User.findOne({username: req.body.username});
            if(!user){
                res.status(404).json("wrong usename !");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if(!validPassword){
                res.status(404).json("wrong password");
            }
            if(user && validPassword){
              const accessToken= jwt.sign({
                    id: user.id,
                    admin: user.admin
                },
                process.env.JWT_ACCESS_KEY,
                {
                 expiresIn:"50s"   
                }
                );
                const {password, ...others}= user._doc;

                res.status(200).json({...others,accessToken});
            }

        }
        catch(err){
            res.status(500).json(err)
        }
    },
    showallJson: async(req,res)=>{
        try{
            const user = await User.find();
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }

    }
}
module.exports= authController; 