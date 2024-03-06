import express from 'express'
import authController from '../controllers/auth.controller.js'

const router = express.Router()

const { login, signup, verfiyAuth } = authController

router.post('/login', login)
router.post('/signup', signup)
router.get('/auth', verfiyAuth)

export default router
