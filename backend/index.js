

import express from 'express'


const app = express();


app.get("/",(req,res)=>{
    return res.send("Hello")
})



app.listen(5000,()=>{
    console.log("server running on port 5000")
})