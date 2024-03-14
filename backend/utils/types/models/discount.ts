import { Document } from 'mongoose'

type DiscountAttributes = {
  code: string
  amount: number
  category: string
  active: boolean
  startDate: Date
  endDate: Date
}

export default interface DiscountModelType
  extends DiscountAttributes,
    Document {}
