import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:(true,"Name is required"),
        minlength:3,
        maxlength:30,
    },
    email:{
        type:String,
        required:(true, "Email is required"),
    }
},{timestamps:true}
)

export const User = mongoose.model("User",userSchema)