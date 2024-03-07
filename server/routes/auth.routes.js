import express from 'express'
import authController from '../controllers/auth.controller.js'
import verifyToken from '../middleware/auth.middleware.js'

const router = express.Router()

const { login, signup, currentUser } = authController

router.post('/login', login)
router.post('/signup', signup)
router.get('/auth', verifyToken, currentUser)

export default router
