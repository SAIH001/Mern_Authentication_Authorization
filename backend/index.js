

import express from 'express'
import cors from 'cors';


import JWT from "jsonwebtoken";
//const JWT = require("jsonwebtoken")


import UserSchema from './Models/UserSchema.js'

import connectiondb from './Configuration/dbConnection.js';


const app = express();

const secretkey="abcd_Kuch_bhi";


app.use(cors());
app.use(express.json());



// API : http://localhost:5000/registeruser
// METHOD : POST
// DESCRIPTION: NEW USER CREATION IN DB

app.post("/registeruser",async(req,res)=>{

    const {UserName,UserEmail,UserPassword} =req.body;

  const ResonseRegisterData =  await UserSchema.create({
        UserName,
        UserEmail,
        UserPassword
    });
   
    console.log(ResonseRegisterData)

    return res.status(200).json({"message":"User Successfully Created !!"})
})



// API : http://localhost:5000/getuser
// METHOD : GET
// DESCRIPTION: GET ALL USER DATA FROM MONGO

app.get("/getuser",async(req,res)=>{

   

  const GET_ALL_USER_Data =  await UserSchema.find();
    
  

    return res.status(200).json(
        {
            "message":"All users Fetch Successfully !!",
            "Data":GET_ALL_USER_Data
    }
    )
})



// API : http://localhost:5000/deleteuser/:id
// METHOD : Delete
// DESCRIPTION: Delete User

app.delete("/deleteuser/:id",async(req,res)=>{

    const DeleteHuneWalaUser = req.params.id;

   const UserAvailable = await UserSchema.findByIdAndDelete(DeleteHuneWalaUser);


   if(!UserAvailable){
    return res.status(404).json({
        "error":"User Not Found"
    })
   }


   return res.status(200).json({
    "message":"User Deleted Successfully !",
    "data":UserAvailable
   })


})





// API : http://localhost:5000/updateuser/:id
// METHOD : Update
// DESCRIPTION: Update  User

app.put("/updateuser/:id",async(req,res)=>{

    const UpdateHuneWalaUser = req.params.id;


    // const {UserName, UserEmail, UserPassword}  = req.body;

    console.log(`Update hune wala user ki id  : ${UpdateHuneWalaUser}`);


    // await Model.findByIdAndUpdate(id, updateData, { new: true });
   const UserAvailable = await UserSchema.findByIdAndUpdate(UpdateHuneWalaUser,req.body);


    console.log(`Update User Status : ${UserAvailable}`)



//    if(!UserAvailable){
//     return res.status(404).json({
//         "error":"User Not Found"
//     })
//    }


   return res.status(200).json({
    "message":"User Update Successfully !",
    "data":UserAvailable
   })


})




// ---------------- Login API -----------------//

// API : http://localhost:5000/login
// METHOD : POST
// DESCRIPTION: User Login Verification

app.post("/login",async(req,res)=>{
    
    //const emailAbc = req.body.UserEmail
    
    const {UserEmail, UserPassword} = req.body;

    const Login_Available = await UserSchema.findOne({UserEmail:UserEmail});

        if(Login_Available){
            if(UserPassword ==Login_Available.UserPassword ){
           
            const payload = {
                userId:Login_Available._id,
                username:Login_Available.UserName,
                useremail:Login_Available.UserEmail
            }
            const Token = JWT.sign( payload , secretkey , {expiresIn:'1h'}   )
            
            return res.status(200).json({"message":"Login Successfull !!" ,"token":Token})
        } // if (login availabl password matching)
        else{
            return res.status(404).json({"error":"Some Error Occured try again later !!"})
        }
        } // if (login available check krne kelie)
        else{
            return res.status(404).json({"error":"Login not available !! try again"})
        }
})
























app.listen(5000,()=>{
    connectiondb();
    console.log("server running on port 5000")
})