import mongoose from 'mongoose'

const connectionString = process.env.ATLAS_URI || ''
const connectDB = async () => {
  try {
    await mongoose.connect(connectionString)

    console.log('Mongo DB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB
