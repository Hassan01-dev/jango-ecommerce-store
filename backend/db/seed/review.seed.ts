import Review from '../../models/Review.js'

const reviews = [
  [
    {
      rating: 5,
      comment:
        'Excellent phone! The camera quality is amazing and the battery life lasts all day.',
      verifiedPurchase: true
    },
    {
      rating: 4,
      comment:
        'Great value for the features it offers. Fast performance and beautiful display.',
      verifiedPurchase: true
    },
    {
      rating: 5,
      comment:
        'Love this phone! Sleek design and powerful performance. Highly recommend it.',
      verifiedPurchase: false
    }
  ],
  [
    {
      rating: 4,
      comment:
        'Solid laptop for work and gaming. The graphics card delivers smooth gaming experience.',
      verifiedPurchase: true
    },
    {
      rating: 5,
      comment:
        'Impressed with the build quality and performance. Great for multitasking.',
      verifiedPurchase: true
    },
    {
      rating: 3,
      comment: 'Decent laptop for the price. Battery life could be better.',
      verifiedPurchase: false
    }
  ],
  [
    {
      rating: 5,
      comment:
        'Love this smartwatch! It tracks my workouts accurately and looks stylish.',
      verifiedPurchase: true
    },
    {
      rating: 4,
      comment: 'Comfortable to wear all day. Battery life is impressive.',
      verifiedPurchase: true
    },
    {
      rating: 3,
      comment:
        'Good smartwatch but the app needs improvement. Sometimes loses connection.',
      verifiedPurchase: false
    }
  ]
]

const seedData = async (customerIds: string[], productIds: string[]) => {
  const reviewsData = reviews.flatMap((innerArray, index) => {
    return innerArray.map((obj) => ({
      ...obj,
      productId: productIds[index],
      customerId: customerIds[Math.floor(Math.random() * customerIds.length)]
    }))
  })

  await Review.insertMany(reviewsData)
  console.log('Reviews created successfully')
}

export default seedData
