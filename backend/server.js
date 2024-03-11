 import express from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'
import connectdb from './config/db.js'
import { errorhandler } from './middleware/errorhandler.js'
import userRouter from './routes/UserRoute.js'

 dotenv.config()
 const port = process.env.PORT
 const app = express()
 connectdb();

 app.use(cors())
 app.use(express.json())

 app.use('/api/user',userRouter)

 app.get('/',(req,res)=>{
    res.status(200).send('HII')
 })

 app.listen(port,()=>{
    console.log(`Server connected to port ${port}`)
 })

 app.use(errorhandler)