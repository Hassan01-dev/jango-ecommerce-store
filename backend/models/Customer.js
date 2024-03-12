import mongoose from 'mongoose'

const { Schema, model } = mongoose

const CustomerSchema = new Schema(
  {
    addressIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
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

const Customer = model('Customer', CustomerSchema)
export default Customer
