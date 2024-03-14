import bcrypt from 'bcryptjs'
import User from '../models/User'
import { Response } from 'express'
import {
  UpdateProfileRequest,
  UpdatePasswordRequest
} from '../utils/types/controller/profileControllerTypes'
import { AuthenticatedRequest } from '../utils/types/controller/authControllerTypes'

const updateProfile = async (req: UpdateProfileRequest, res: Response) => {
  const { firstName, lastName } = req.body

  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ message: 'Missing required fields firstName | lastName' })
  }

  try {
    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    user.firstName = firstName
    user.lastName = lastName

    await user.save()

    return res.status(200).json({ message: 'User Updated successfully' })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const updatePassword = async (req: UpdatePasswordRequest, res: Response) => {
  const { password, newPassword } = req.body

  if (!password || !newPassword) {
    return res
      .status(400)
      .json({ message: 'Missing required fields password | newPassword' })
  }

  try {
    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    await user.save()

    return res.status(200).json({ message: 'Password Updated successfully' })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const deleteAccount = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.userId)
    if (!user) return res.status(404).json({ message: 'User not found' })
    return res.status(200).json({ message: 'Account deleted successfully' })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

export default { updateProfile, updatePassword, deleteAccount }
