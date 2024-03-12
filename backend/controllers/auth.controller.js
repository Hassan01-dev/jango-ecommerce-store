import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ error: 'Invalid Login/Password' })
    }

    const isAuthenticated = await bcrypt.compare(password, user.password)
    if (!isAuthenticated) {
      return res.status(400).json({ error: 'Invalid Login/Password' })
    }

    const payload = { userId: user.id }
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' },
      (error, token) => {
        if (error) {
          console.error(error.message)
          return res.status(500).json({ message: 'Server Error' })
        }
        return res.status(200).json({ token })
      }
    )
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ message: 'Server Error' })
  }
}

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    let user = await User.findOne({ email })
    if (user) {
      return res.status(409).json({ error: 'User already exist' })
    }

    user = new User({ name, email, password })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

    const payload = { user: { id: user.id } }
    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' },
      (error, token) => {
        if (error) {
          console.error(error.message)
          return res.status(500).json({ message: 'Server Error' })
        }
        return res.status(201).json({ token })
      }
    )
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ message: 'Server Error' })
  }
}

const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select(['-__v', '-password'])
    return res.status(200).json(user)
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ message: 'Server Error' })
  }
}

export default { login, signup, currentUser }
