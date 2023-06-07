import express from 'express'
import { getBlog, postBlog } from '../../controllers/Blog/blogCtrl.js' 
const blogRouter = express.Router()

blogRouter.post('/post-blog',postBlog)
blogRouter.get('/',getBlog)



export default blogRouter