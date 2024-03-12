import ProductVariant from '../../models/ProductVarient.js'

const productVariants = [
  [
    { value: '64GB, Black', price: 799 },
    { value: '128GB, White', price: 899 },
    { value: '256GB, Blue', price: 999 }
  ],
  [
    { value: '13-inch, 256GB SSD', price: 1299 },
    { value: '15-inch, 512GB SSD', price: 1599 },
    { value: '17-inch, 1TB SSD', price: 1899 }
  ],
  [
    { value: 'Silver, Small', price: 199 },
    { value: 'Black, Large', price: 219 },
    { value: 'Rose Gold, Medium', price: 209 }
  ]
]

const seedData = async (productIds) => {
  const productVariantsData = productVariants.flatMap((innerArray, index) => {
    return innerArray.map((obj) => ({ ...obj, productId: productIds[index] }))
  })

  await ProductVariant.insertMany(productVariantsData)
  console.log('ProductVariants created successfully')
}

export default seedData
