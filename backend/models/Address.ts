import mongoose from 'mongoose'
import AddressModelType from '../utils/types/models/address'

const { Schema, model } = mongoose

const AddressSchema = new Schema<AddressModelType>(
  {
    city: { type: String, required: [true, 'City is required'], trim: true },
    state: { type: String, required: [true, 'State is required'], trim: true },
    zipCode: {
      type: String,
      required: [true, 'Zip Code is required'],
      trim: true,
      match: /^\d{5}-\d{3}$/
    },
    contact: {
      type: String,
      required: [true, 'Contact is required'],
      trim: true
    },
    streetAddress: {
      type: String,
      required: [true, 'Street Address is required'],
      trim: true
    },
    addressType: {
      type: String,
      enum: ['home', 'work', 'office', 'other'],
      required: [true, 'Address Type is required']
    }
  },
  { timestamps: true }
)

const Address = model<AddressModelType>('Address', AddressSchema)
export default Address
