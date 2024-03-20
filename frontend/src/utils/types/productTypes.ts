export type ProductAttributes = {
  _id: string
  sku: string
  name: string
  stock: number
  tags: string[]
  images: string[]
  category: string
  supplierId: string
  description: string
  ratings: {
    average: number
    count: number
  }
}
