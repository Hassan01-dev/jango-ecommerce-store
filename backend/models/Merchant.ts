import mongoose from 'mongoose'
import MerchantModelType from '../utils/types/models/merchant'

const { Schema, model } = mongoose

const MerchantSchema = new Schema<MerchantModelType>(
  {
    addressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      max: [20, 'Name must not exceed 20 characters'],
      min: [3, 'Name must be at least 3 characters'],
      match: [/^[A-Za-z ]+$/, 'Name must only contain letters and spaces']
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
    sku: { type: String, required: true, unique: true },
    website: { type: String, default: '', trim: true },
    logo: { type: String, default: '' },
    socialMedia: [
      {
        url: { type: String, default: '', trim: true },
        name: { type: String, default: '', trim: true }
      }
    ]
  },
  { timestamps: true }
)

const Merchant = model<MerchantModelType>('Merchant', MerchantSchema)
export default Merchant
