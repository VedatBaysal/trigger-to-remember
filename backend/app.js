import express from 'express'
import dotenv from 'dotenv'
import wordRoutes from './routes/wordRoutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

const port = process.env.PORT

app.use('/api/word', wordRoutes)

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
