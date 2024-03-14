import mongoose, { Document } from 'mongoose'

type OrderAttributes = {
  customerId: mongoose.Types.ObjectId
  customeraAddressId: mongoose.Types.ObjectId
  discountId: mongoose.Types.ObjectId
  status: string
}

export default interface OrderModelType extends OrderAttributes, Document {}
