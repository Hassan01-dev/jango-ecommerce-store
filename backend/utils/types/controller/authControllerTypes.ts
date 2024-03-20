import { Request } from 'express'
import { MerchantSocialMedia } from '../models/merchant'

export interface LoginRequest extends Request {
  body: {
    email: string
    password: string
  }
}

export interface SignupRequest extends Request {
  body: {
    firstName: string
    lastName: string
    email: string
    password: string
  }
}

export interface MerchantSignupRequest extends Request {
  body: {
    name: string
    email: string
    password: string
    sku: string
    social: MerchantSocialMedia
  }
}

export interface AuthenticatedRequest extends Request {
  userId?: string
}
