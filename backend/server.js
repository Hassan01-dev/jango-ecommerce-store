import express from 'express'
import cors from 'cors'
import './loadEnvironment.js'
import connectDB from './db/config.js'

import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 3001
const app = express()

connectDB()

app.use(express.json({ extended: true }))
app.use(cors())

app.use('/api/', authRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
