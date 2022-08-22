const User = require("../model/User");

const userController ={
    //GET ALL USER 
    getallUser : async(req,res)=>{
        try{
            const showUser = await User.find();
            res.status(200).json(showUser);
        }
        catch(err){
            res.status(500).json(err)
        } 
    } ,
  
    //DELETE USSER ID
    deleteUser: async(req,res)=>{ 
    try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Ban Da Xoa Thanh Cong");

    }
    catch(err){
        res.status(500).json(err)
    }

    }
}


module.exports=userController;
