import express from 'express'
import verifyToken from '../middleware/auth.middleware.js'
import userProfileController from '../controllers/userProfile.controller.js'

const router = express.Router()

const { updateProfile, updatePassword, deleteAccount } = userProfileController

router.put('/', verifyToken, updateProfile)
router.put('/password', verifyToken, updatePassword)
router.delete('/', verifyToken, deleteAccount)

export default router
