import express from  'express'
import { registerUser } from '../controllers/UserController.js'

const router =  express.Router()

router.route('/').post(registerUser)

export default router