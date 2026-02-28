
import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    UserName:{
        type:String
    },
    UserEmail:{
        type:String,
        unique:true
    },
    UserPassword:{
        type:String,
        
    }
})




const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel
