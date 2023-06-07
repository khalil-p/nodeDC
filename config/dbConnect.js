import { log } from "console";
import mongoose from "mongoose";

export const dbConnect=(req,res)=>{
try {
    const conn = mongoose.connect(process.env.MONGODB_URL)
    console.log(`Server connected successfully`);
} catch (error) {
    console.log((error));
}
}