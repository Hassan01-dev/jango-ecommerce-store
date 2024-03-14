import express from 'express'
import cors from 'cors'
import './config/loadEnvironment'
import connectDB from './config/dbConfig'

import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import productRoutes from './routes/product.routes'
import userProfileRoutes from './routes/userProfile.routes'

const PORT = process.env.PORT || 3001
const app = express()

connectDB()

app.use(express.json({ extended: true } as object))
app.use(cors())

app.use('/api/', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/profile', userProfileRoutes)
app.use('/api/products', productRoutes)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
