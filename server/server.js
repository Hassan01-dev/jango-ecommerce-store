import express from 'express'
import cors from 'cors'
import './loadEnvironment.js'
import connectDB from './db/config.js'

import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/auth.js'

const PORT = process.env.PORT || 3001
const app = express()

connectDB()

app.use(express.json({ extended: true }))
app.use(cors())

app.get('/', (req, res) => res.send('Jango API running...'))
app.use('/api/v1', authRoutes)
app.use('/api/v1/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
