import express from 'express'
import { getHome } from '../controllers/home'

const router = express.Router()

const initRouter = (app) => {
  router.get('/', getHome)
  return app.use('/', router)
}

export default initRouter
