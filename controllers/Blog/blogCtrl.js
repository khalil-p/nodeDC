import { Blog } from "../../models/Blog/blogModel.js";

const postBlog = async(req,res)=>{
    try {
        const post  = await Blog.create(req.body)
        res.json(post)
    } catch (error) {
        res.json({error:error})
    }
}

const getBlog = async(req,res)=>{
    try {
        const post = await Blog.find().populate("postedBy")
        res.json(post)
    } catch (error) {
        res.json({error:error})
    }
}

export {postBlog,getBlog}