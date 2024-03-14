import mongoose, { Document } from 'mongoose'

type ProductVariantAttributes = {
  productId: mongoose.Types.ObjectId
  value: string
  price: number
}

export default interface ProductVariantModelType
  extends ProductVariantAttributes,
    Document {}
