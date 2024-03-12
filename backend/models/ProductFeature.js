import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ProductFeatureSchema = new Schema(
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

const ProductFeature = model('ProductFeature', ProductFeatureSchema)
export default ProductFeature
