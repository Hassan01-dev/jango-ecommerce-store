import { Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import {
  LoginRequest,
  SignupRequest,
  AuthenticatedRequest,
  MerchantSignupRequest
} from '../utils/types/controller/authControllerTypes'
import UserModelType from '../utils/types/models/user'
import Merchant from '../models/Merchant'

const login = async (req: LoginRequest, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid Login/Password' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid Login/Password' })
    }

    const payload = { userId: user.id, userType: 'customer' }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h'
    })
    return res.status(200).json({ userType: 'customer', token })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const signup = async (req: SignupRequest, res: Response) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(409).json({ message: 'User already exists' })
    }

    user = new User({ firstName, lastName, email, password } as UserModelType)

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    await user.save()

    const payload = { userId: user.id, userType: 'customer' }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h'
    })
    return res.status(201).json({ userType: 'customer', token })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const merchantLogin = async (req: LoginRequest, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    const user = await Merchant.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid Login/Password' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid Login/Password' })
    }

    const payload = { userId: user.id, userType: 'merchant' }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h'
    })
    return res.status(200).json({ userType: 'merchant', token })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const merchantSignup = async (req: MerchantSignupRequest, res: Response) => {
  const { name, sku, email, password, social } = req.body

  if (!name || !sku || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    let merchant = await Merchant.findOne({ email })
    if (merchant) {
      return res
        .status(409)
        .json({ message: 'Merchant with this email already exists' })
    }

    merchant = new Merchant({ name, email, sku, password, socialMedia: social })

    const salt = await bcrypt.genSalt(10)
    merchant.password = await bcrypt.hash(password, salt)
    await merchant.save()

    const payload = { userId: merchant.id, userType: 'merchant' }
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1h'
    })
    return res.status(201).json({ userType: 'merchant', token })
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

const currentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const foundUser = await User.findById(req.userId).select('-__v -password')
    return res.status(200).json(foundUser)
  } catch (error: unknown) {
    return res.status(500).json({ message: 'Server Error' })
  }
}

export default { login, signup, merchantLogin, merchantSignup, currentUser }
