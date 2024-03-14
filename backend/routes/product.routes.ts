import express from 'express'
import verifyToken from '../middleware/auth.middleware.js'
import productController from '../controllers/product.controller.js'

const router = express.Router()

const { listAllProducts, productBySku } = productController

router.get('/', verifyToken, listAllProducts)
router.get('/:sku', verifyToken, productBySku)

export default router
