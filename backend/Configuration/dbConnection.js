
import mongoose from "mongoose";




const connectiondb = async()=>{
   const connectDB =  await mongoose.connect("mongodb+srv://aliimran:aliimran@todo.pq4zmsn.mongodb.net/?appName=TODO");
}



export default connectiondb;