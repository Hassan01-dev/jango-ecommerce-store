import Product from '../../models/Product.js'

const products = [
  {
    name: 'Smartphone',
    supplierId: '<supplier_id>',
    description: 'High-performance smartphone with advanced features.',
    stock: 100,
    sku: 'SP001',
    tags: ['mobile', 'smartphone', 'tech'],
    category: 'electronics',
    ratings: {
      average: 4.7,
      count: 25
    }
  },
  {
    name: 'Laptop',
    supplierId: '<supplier_id>',
    description: 'Powerful laptop for work and entertainment.',
    stock: 50,
    sku: 'LT001',
    tags: ['laptop', 'computer', 'tech'],
    category: 'electronics',
    ratings: {
      average: 4.6,
      count: 18
    }
  },
  {
    name: 'Smartwatch',
    supplierId: '<supplier_id>',
    description:
      'Sleek and stylish smartwatch with fitness tracking capabilities.',
    stock: 75,
    sku: 'SW001',
    tags: ['wearable', 'smartwatch', 'fitness'],
    category: 'electronics',
    ratings: {
      average: 4.4,
      count: 22
    }
  }
]

const seedData = async (supplierIds: string[]) => {
  const productsData = products.map((product) => ({
    ...product,
    supplierId: supplierIds[Math.floor(Math.random() * supplierIds.length)]
  }))

  const newProducts = await Product.insertMany(productsData)
  console.log('Products created successfully')
  const productIds = newProducts.map((obj) => String(obj._id))
  return productIds
}

export default seedData
