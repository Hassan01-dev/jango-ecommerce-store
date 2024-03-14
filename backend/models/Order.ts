import mongoose from 'mongoose'
import OrderModelType from '../utils/types/models/order'

const { Schema, model } = mongoose

const OrderSchema = new Schema<OrderModelType>(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: [true, 'Customer is required'],
      immutable: true
    },
    customeraAddressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: [true, 'Address is required'],
      immutable: true
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending'
    },
    discountId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discount',
      default: null
    }
  },
  { timestamps: true }
)

const Order = model<OrderModelType>('Order', OrderSchema)
export default Order
