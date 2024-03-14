import mongoose from 'mongoose'
import ProductVariantModelType from '../utils/types/models/productVarient'

const { Schema, model } = mongoose

const ProductVariantSchema = new Schema<ProductVariantModelType>(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required'],
      immutable: true
    },
    value: { type: String, required: true },
    price: { type: Number, required: true, min: 0, default: 0 }
  },
  { timestamps: true }
)

const ProductVariant = model<ProductVariantModelType>(
  'ProductVariant',
  ProductVariantSchema
)
export default ProductVariant
