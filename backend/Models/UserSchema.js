
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

// ES MODULE  IMPORT  , EXPORT DEFAULT

export default mongoose.model("RegisterUser", UserSchema);



// COMMON JS MODULE.EXPORT

// module.exports = mongoose.model("RegisterUser",UserSchema);




