import express from  'express'
import { loginUser, registerUser } from '../controllers/UserController.js'

const router =  express.Router()

router.route('/').post(registerUser)
router.route('/login').post(loginUser)

export default router