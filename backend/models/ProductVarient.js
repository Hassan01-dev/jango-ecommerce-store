import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ProductVariantSchema = new Schema(
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

const ProductVariant = model('ProductVariant', ProductVariantSchema)
export default ProductVariant
