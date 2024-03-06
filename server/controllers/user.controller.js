import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const listAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({}).select(['-__v', '-password'])

    if (!allUsers) {
      return res.status(400).json({ error: 'User not found' })
    }

    res.status(200).json(allUsers)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const fetchUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select([
      '-__v',
      '-password'
    ])

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const updateUserById = async (req, res) => {
  try {
    const { name, password } = req.body

    if (!name || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    let user = await User.findById(req.params.id)
    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    user.name = name

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

    res.status(201).json({ message: 'User Updated successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deleteUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id)
    if (!user) {
      return res.status(402).json({ error: 'User not found' })
    }

    await user.deleteOne()
    res.status(200).json({ message: 'User Deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default { listAllUsers, fetchUserById, updateUserById, deleteUserById }
