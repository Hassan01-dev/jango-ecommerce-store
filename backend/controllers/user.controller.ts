import User from '../models/User'
import { Request, Response } from 'express'

const listAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-__v -password')

    if (!users.length) {
      return res.status(404).json({ message: 'Users List is Empty' })
    }

    return res.status(200).json(users)
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const fetchUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-__v -password')

    if (!user) return res.status(404).json({ message: 'User not found' })

    return res.status(200).json(user)
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

export default { listAllUsers, fetchUserById }
