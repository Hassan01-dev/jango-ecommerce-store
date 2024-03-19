import mongoose, { Document } from 'mongoose'

type MerchantAttributes = {
  addressId: mongoose.Types.ObjectId
  name: string
  email: string
  password: string
  sku: string
  logo?: string
  socialMedia?: MerchantSocialMedia
}

export type MerchantSocialMedia = {
  website?: string;
  youtube?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  reddit?: string;
}

export default interface MerchantModelType
  extends MerchantAttributes,
    Document {}
