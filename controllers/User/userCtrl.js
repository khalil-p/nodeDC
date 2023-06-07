import { User } from "../../models/User/userModel.js";


const createUser = async(req,res)=>{
    try {
        const findUser = await User.find({email:req.body.email})
        if(findUser){res.json({message:"User already registered"})}
        const newUser= await User.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.json({message:error})
    }
}

const getUsers = async(req,res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({error:error})
    }
}

const getUser = async(req,res)=>{
    const {id} = req.params
    try {
        const users = await User.findById(id)
        res.json(users)
    } catch (error) {
        res.json({error:error})
    }
}

const deleteUser=async(req,res)=>{
    const {id} = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.json(deleteUser)
    } catch (error) {
     res.json({error:error})   
    }
}

const updateUser = async (req,res)=>{
    const {id} = req.params
    try {
        console.log(id);
        console.log(req.body);
        const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.json(updateUser)
    } catch (error) {
        res.json({error:error})
    }
}
export {createUser,getUsers,getUser,deleteUser,updateUser}