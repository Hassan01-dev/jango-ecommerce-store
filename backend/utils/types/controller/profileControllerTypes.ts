import { Request } from 'express'

export interface UpdateProfileRequest extends Request {
  userId: string
  body: {
    firstName: string
    lastName: string
  }
}

export interface UpdatePasswordRequest extends Request {
  userId: string
  body: {
    password: string
    newPassword: string
  }
}
