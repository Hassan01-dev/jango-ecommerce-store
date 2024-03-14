import { Request } from 'express'

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

export interface AuthenticatedRequest extends Request {
  userId?: string
}
