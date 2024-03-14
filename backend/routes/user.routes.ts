import express from 'express'
import userController from '../controllers/user.controller.js'
import verifyToken from '../middleware/auth.middleware.js'

const router = express.Router()

const { listAllUsers, fetchUserById } = userController

router.get('/', verifyToken, listAllUsers)
router.get('/:id', verifyToken, fetchUserById)

export default router
