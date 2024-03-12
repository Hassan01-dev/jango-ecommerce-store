import mongoose from 'mongoose'

const { Schema, model } = mongoose

const OrderItemSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product is required'],
      immutable: true
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: [true, 'Order is required'],
      immutable: true
    },
    productVarientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductVarient',
      required: [true, 'Product Varient is required']
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: 1
    },
    price: { type: Number, required: [true, 'Price is required'], min: 0 }
  },
  { timestamps: true }
)

const OrderItem = model('OrderItem', OrderItemSchema)
export default OrderItem
