import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './config/dbConnect.js'
import bodyParser from 'body-parser'
import blogRouter from './routes/Blog/blogRouter.js'
import userRouter from './routes/User/userRouter.js'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 4000
dbConnect()
app.use(bodyParser.json())

app.use('/api/user',userRouter)
app.use('/api/blog',blogRouter)



app.get('/',(req,res)=>{
    res.status(200).send("Hello From Node...")
})

app.listen(PORT,()=>{
    console.log(`Application is listening at ${PORT}`);
})