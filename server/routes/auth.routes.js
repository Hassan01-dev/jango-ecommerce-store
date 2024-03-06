import express from 'express'
import authController from '../controllers/auth.controller.js'

const router = express.Router()

const { login, signup } = authController

router.post('/login', login)
router.post('/signup', signup)

export default router
