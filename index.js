const express = require("express");
const app= express();
//DOTENV NAY DUNG DE DINH DANG FILE ENV ( )
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 
app.use(cors());
app.use(cookieParser());
app.use(express.json());
dotenv.config();


//KHAI BÁO FILE NÀY ĐANG Ở ĐÂU 
const authRouter =require("./router/auth")
const userRouter = require("./router/user")
//PHAN KET NOI VOI MONGOOSE DB
mongoose.connect(process.env.MONGOOSE_URL,()=>{  
    console.log("CONNECT TO MONGOOSE DB !!!!")
})

//ROUTES 

app.use("/v1/auth",authRouter);

app.use("/v1/user",userRouter);

//MAKE LOCALHOST 

app.listen(8000,()=>{
    console.log("SERVE IS RUNNING !!!");
})



//AUTHENTICATION CHUC NANG LOGIN , SO SANH DU LIEU 


//AUTHORIZATION CHUNG NANG PHAN QUYEN 