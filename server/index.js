import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js'

dotenv.config()

const port = process.env.PORT || 5001

const app = express()

app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})