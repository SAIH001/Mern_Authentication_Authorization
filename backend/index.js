

import express from 'express'
import cors from 'cors';


import UserSchema from './Models/UserSchema.js'

import connectiondb from './Configuration/dbConnection.js';


const app = express();






app.use(cors());
app.use(express.json());





// API : http://localhost:5000/registeruser
// METHOD : POST
// DESCRIPTION: NEW USER CREATION IN DB

app.post("/registeruser",async(req,res)=>{

    const {UserName,UserEmail,UserPassword} =req.body;

  const ResonseRegisterData =  await UserSchema.create({
        UserName,
        UserName,
        UserPassword
    });
   
    console.log(ResonseRegisterData)

    return res.status(200).json({"message":"User Successfully Created !!"})
})



app.listen(5000,()=>{
    connectiondb();
    console.log("server running on port 5000")
})