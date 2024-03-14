import mongoose from 'mongoose'
import ProductFeatureModelType from '../utils/types/models/productFeature'

const { Schema, model } = mongoose

const ProductFeatureSchema = new Schema<ProductFeatureModelType>(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required'],
      immutable: true
    },
    name: { type: String, required: true },
    value: { type: String, required: true }
  },
  { timestamps: true }
)

const ProductFeature = model<ProductFeatureModelType>(
  'ProductFeature',
  ProductFeatureSchema
)
export default ProductFeature
