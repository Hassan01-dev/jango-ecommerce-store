import mongoose from 'mongoose'

const { Schema, model } = mongoose

const ReviewSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required'],
      immutable: true
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: [true, 'Customer is required'],
      immutable: true
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true
    },
    verifiedPurchase: { type: Boolean, default: false },
    images: { type: [String], default: [] }
  },
  { timestamps: true }
)

const Review = model('Review', ReviewSchema)
export default Review
