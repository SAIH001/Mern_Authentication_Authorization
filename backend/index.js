

import express from 'express'
import cors from 'cors';


// Models
import UserModel from './Models/UserSchema';


const app = express();






app.use(cors());
app.use(express.json());





// API : http://localhost:5000/registeruser
// METHOD : POST
// DESCRIPTION: NEW USER CREATION IN DB

app.post("/registeruser",(req,res)=>{

    const {UserName,UserEmail,UserPassword} =req.body;

    
   

    return res.status(200).json({"message":"User Successfully Created !!"})
})



app.listen(5000,()=>{
    console.log("server running on port 5000")
})