import mongoose from 'mongoose'
import DiscountModelType from '../utils/types/models/discount'

const { Schema, model } = mongoose

const DiscountSchema = new Schema<DiscountModelType>(
  {
    code: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    category: {
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

const Discount = model<DiscountModelType>('Discount', DiscountSchema)
export default Discount
