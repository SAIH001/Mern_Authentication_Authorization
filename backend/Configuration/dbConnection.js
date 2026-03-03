
import mongoose from "mongoose";




const connectiondb = async()=>{
   const connectDB =  await mongoose.connect("mongodb+srv://syedaliimran:12345ali@todoapp.b2dolkp.mongodb.net/?appName=TodoApp");
}



export default connectiondb;