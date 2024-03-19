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
    sku: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[A-Za-z0-9-_]+$/,
        'SKU must only contain letters, numbers, dashes and underscores'
      ]
    },
    logo: { type: String, default: '' },
    socialMedia: {
      website: { type: String, match: /^https?:\/\// },
      youtube: { type: String, match: /^https:\/\/www.youtube.com\/(channel|c|user)\// },
      twitter: { type: String, match: /^https:\/\/twitter.com\// },
      facebook: { type: String, match: /^https:\/\/www.facebook.com\// },
      linkedin: { type: String, match: /^https:\/\/www.linkedin.com\// },
      instagram: { type: String, match: /^https:\/\/www.instagram.com\// },
      reddit: { type: String, match: /^https:\/\/www.reddit.com\// }
    },
  },
  { timestamps: true }
)

const Merchant = model<MerchantModelType>('Merchant', MerchantSchema)
export default Merchant
