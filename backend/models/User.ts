import mongoose from 'mongoose'
import UserModelType from '../utils/types/models/user'

const { Schema, model } = mongoose

const UserSchema = new Schema<UserModelType>(
  {
    addressIds: [{ type: Schema.Types.ObjectId, ref: 'Address', default: [] }],
    firstName: {
      type: String,
      trim: true,
      required: [true, 'First Name is required'],
      max: [20, 'First Name must not exceed 20 characters'],
      min: [3, 'First Name must be at least 3 characters'],
      match: [/^[A-Za-z ]+$/, 'First Name must only contain letters and spaces']
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Last Name is required'],
      max: [20, 'Last Name must not exceed 20 characters'],
      min: [3, 'Last Name must be at least 3 characters'],
      match: [/^[A-Za-z ]+$/, 'Last Name must only contain letters and spaces']
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, 'Email is required'],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address'
      ]
    },
    password: { type: String, required: [true, 'Password is required'] },
    profileImage: { type: String, default: '' }
  },
  { timestamps: true }
)

const User = model<UserModelType>('User', UserSchema)

export default User
