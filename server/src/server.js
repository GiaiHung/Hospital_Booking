import express from 'express'
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initRouter from './routes/init'
import connect from './config/connectDB'
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

viewEngine(app)
initRouter(app)

connect()

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT)
})
