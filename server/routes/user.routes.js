import express from 'express'
import userController from '../controllers/user.controller.js'

const router = express.Router()

const { listAllUsers, fetchUserById, updateUserById, deleteUserById } =
  userController

router.get('/', listAllUsers)
router.get('/:id', fetchUserById)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)

export default router
