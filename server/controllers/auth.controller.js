import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    let user = await User.findOne({ email })
    if (!user) {
      return res.status(402).json({ error: 'User not found' })
    }

    const isAuthenticated = await bcrypt.compare(password, user.password)
    if (isAuthenticated) {
      res.status(200).json({ message: 'Login successful' })
    } else {
      res.status(402).json({ error: 'Invalid Email or Password' })
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
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
      return res.status(400).json({ error: 'User already exist' })
    }

    user = new User({ name, email, password })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default { login, signup }
