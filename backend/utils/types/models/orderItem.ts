import mongoose, { Document } from 'mongoose'

type OrderItemAttributes = {
  productId: mongoose.Types.ObjectId
  orderId: mongoose.Types.ObjectId
  productVarientId: mongoose.Types.ObjectId
  quantity: number
  price: number
}

export default interface OrderItemModelType
  extends OrderItemAttributes,
    Document {}
