import mongoose, { Document } from 'mongoose'

type ReviewAttributes = {
  productId: mongoose.Types.ObjectId
  customerId: mongoose.Types.ObjectId
  rating: number
  comment: string
  verifiedPurchase?: boolean
  images?: string[]
}

export default interface ReviewModelType extends ReviewAttributes, Document {}
