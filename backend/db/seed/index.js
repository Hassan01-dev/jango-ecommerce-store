import '../../config/loadEnvironment.js'
import connectDB from '../../config/config.js'
import mongoose from 'mongoose'
import seedReviews from './review.seed.js'
import seedProducts from './product.seed.js'
import seedAddresses from './address.seed.js'
import seedSuppliers from './supplier.seed.js'
import seedCustomers from './customer.seed.js'
import seedProductFeatures from './productFeature.seed.js'
import seedProductVariants from './productVariant.seed.js'

const seedDatabase = async () => {
  try {
    connectDB()

    const addressIds = await seedAddresses()
    const supplierIds = await seedSuppliers(addressIds.slice(0, 2))
    const customerIds = await seedCustomers(addressIds.slice(2))
    const productIds = await seedProducts(supplierIds)
    await seedProductFeatures(productIds)
    await seedProductVariants(productIds)
    await seedReviews(customerIds, productIds)

    console.log('Data seeded successfully')
  } catch (error) {
    console.error('Error while seeding the database', error)
  } finally {
    mongoose.disconnect()
  }
}

seedDatabase()
