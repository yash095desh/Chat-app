import asynchandler from 'express-async-handler'
import User from '../Modal/UserModel.js'
import { genratetoken } from '../config/genrateToken.js'
import bcryptjs from 'bcryptjs'

export const registerUser = asynchandler(async(req,res)=>{
    const {name , email ,password , avatar} = req.body
    if(!name || !email || !password ){
        res.status(400)
        throw new Error('User Credentials Not Found')
    }

    const userExist = await User.find({email})
    if(userExist){
        res.status(401)
        throw new Error('User Already Exist')
    }

    const salt = bcryptjs.genSaltSync(10)
    const hashedpassword = bcryptjs.hashSync(password,salt)
    const user = await User.create({name,email,password:hashedpassword,avatar})

    if(!user){
        res.status(400)
        throw new Error('Internal Server Error ,please try again')
    }

    const {password : pass ,...rest} = user._doc 

    res.status(200).send({
        ...rest,token:genratetoken(user._id)
    })
})

export const loginUser = asynchandler(async(req,res)=>{
   const {email,password} = req.body

   if(!email || !password){
    res.status(401)
    throw new Error('User Credentials Not Found')
   }
   const user = await User.findOne({email})
   const ispassword = bcryptjs.compareSync(password,user.password)
   if(!ispassword){
    res.status(400)
    throw new Error('Invalid Email or Password')
   }
   
   const {password : pass ,...rest} = user._doc 

    res.status(200).send({
        ...rest,token:genratetoken(user._id)
    })
})