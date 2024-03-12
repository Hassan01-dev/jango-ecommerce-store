import mongoose from 'mongoose'

const { Schema, model } = mongoose

const DiscountSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    type: {
      type: String,
      enum: ['percentage', 'fixed'],
      required: true
    },
    active: { type: Boolean, default: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  },
  { timestamps: true }
)

const Discount = model('Discount', DiscountSchema)
export default Discount
