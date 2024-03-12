import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ProductSchema = new Schema(
  {
    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      required: [true, 'Supplier is required'],
      immutable: true
    },
    name: {
      type: String,
      required: [true, 'Product Name is required'],
      trim: true
    },
    description: { type: String, default: '', trim: true },
    stock: { type: Number, default: 0, min: 0 },
    sku: { type: String, unique: true },
    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    category: {
      type: String,
      enum: ['accessories', 'electronics', 'clothing', 'books', 'home', 'toys'],
      required: true
    },
    ratings: {
      average: { type: Number, default: 0, min: 0, max: 5 },
      count: { type: Number, default: 0, min: 0 }
    }
  },
  { timestamps: true }
)

const Product = model('Product', ProductSchema)
export default Product