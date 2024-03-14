import mongoose, { Document } from 'mongoose'

type MerchantAttributes = {
  addressId: mongoose.Types.ObjectId
  name: string
  email: string
  password: string
  sku: string
  website?: string
  logo?: string
  socialMedia?: {
    url: string
    name: string
  }[]
}

export default interface MerchantModelType
  extends MerchantAttributes,
    Document {}
