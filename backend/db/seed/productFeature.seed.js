import ProductFeature from '../../models/ProductFeature.js'

const productFeatures = [
  [
    { name: 'Display', value: '6.5 inches, Super AMOLED' },
    { name: 'Camera', value: 'Quad 64MP + 12MP + 5MP + 2MP' },
    { name: 'Processor', value: 'Snapdragon 888' },
    { name: 'Battery', value: '5000mAh, Fast charging' },
    { name: 'Operating System', value: 'Android 12' }
  ],
  [
    { name: 'Screen Size', value: '15.6 inches' },
    { name: 'Processor', value: 'Intel Core i7-11800H' },
    { name: 'RAM', value: '16GB DDR4' },
    { name: 'Storage', value: '512GB SSD' },
    { name: 'Graphics', value: 'NVIDIA GeForce RTX 3060' }
  ],
  [
    { name: 'Display', value: '1.3 inches, AMOLED' },
    { name: 'Sensors', value: 'Heart rate, SpO2, GPS' },
    { name: 'Battery Life', value: 'Up to 7 days' },
    { name: 'Water Resistance', value: '5 ATM' },
    { name: 'Compatibility', value: 'iOS and Android' }
  ]
]

const seedData = async (productIds) => {
  const productFeaturesData = productFeatures.flatMap((innerArray, index) => {
    return innerArray.map((obj) => ({ ...obj, productId: productIds[index] }))
  })

  await ProductFeature.insertMany(productFeaturesData)
  console.log('ProductFeatures created successfully')
}

export default seedData
