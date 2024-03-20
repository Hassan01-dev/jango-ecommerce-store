import express from 'express'
import authController from '../controllers/auth.controller'
import verifyToken from '../middleware/auth.middleware'

const router = express.Router()

const { login, signup, merchantLogin, merchantSignup, currentUser } =
  authController

router.get('/auth', verifyToken, currentUser)
router.post('/login', login)
router.post('/signup', signup)
router.post('/merchant/login', merchantLogin)
router.post('/merchant/signup', merchantSignup)

export default router
