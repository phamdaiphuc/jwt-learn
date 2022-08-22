const jwt = require("jsonwebtoken");

const middlewareController ={


    verifyToken:(req,res,next)=>{
        const token = req.header.token;
        if(token){
            const accessToken= token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY,(err,user)=>{
                if(err){
                    res.status(403).json("Token is not valid");
                }
                req.user= user;
                next();
            })
        }
        else{
            res.status(401).json("you are not authentication")
        }
    }
}


module.exports = middlewareController;