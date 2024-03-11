 import express from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'

 dotenv.config()
 const port = process.env.PORT
 const app = express()

 app.use(cors())

 app.get('/',(req,res)=>{
    res.status(200).send('HII')
 })

 app.listen(port,()=>{
    console.log(`Server connected to port ${port}`)
 })