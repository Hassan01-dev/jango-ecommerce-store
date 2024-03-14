import mongoose, { Document } from 'mongoose'

type UserAttributes = {
  addressIds?: mongoose.Types.ObjectId[]
  firstName: string
  lastName: string
  email: string
  password: string
  profileImage?: string
}

export default interface UserModelType extends UserAttributes, Document {}
