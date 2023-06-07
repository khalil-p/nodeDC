import express from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../../controllers/User/userCtrl.js'

const userRouter = express.Router()

userRouter.post('/register',createUser)
userRouter.get('/all-users',getUsers)
userRouter.get('/get-user/:id',getUser)
userRouter.delete('/delete-user/:id',deleteUser)
userRouter.put('/update-user/:id',updateUser)



export default userRouter