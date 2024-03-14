import { Document } from 'mongoose'

type AddressAttributes = {
  state: string
  city: string
  zipCode: string
  contact: string
  streetAddress: string
  addressType: string
}

export default interface AddressModelType extends AddressAttributes, Document {}
