import mongoose, { Document } from 'mongoose'

type ProductFeatureAttributes = {
  productId: mongoose.Types.ObjectId
  name: string
  value: string
}

export default interface ProductFeatureModelType
  extends ProductFeatureAttributes,
    Document {}
