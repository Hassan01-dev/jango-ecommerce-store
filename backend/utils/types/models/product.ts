import mongoose, { Document } from 'mongoose'

type ProductAttributes = {
  supplierId: mongoose.Types.ObjectId
  name: string
  description: string
  stock?: number
  sku?: string
  images?: string[]
  tags?: string[]
  category: string
  ratings?: {
    average: number
    count: number
  }
}

export default interface ProductModelType extends ProductAttributes, Document {}
