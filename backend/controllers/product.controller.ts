import { Request, Response } from 'express'
import Product from '../models/Product'

const listAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().select('-__v -createdAt -updatedAt')

    if (!products.length) {
      return res.status(404).json({ message: 'Product List is Empty' })
    }

    return res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

const productBySku = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ sku: req.params.sku }).select(
      '-__v -createdAt -updatedAt'
    )
    if (!product) return res.status(404).json({ message: 'Product not found' })
    return res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

export default { listAllProducts, productBySku }
