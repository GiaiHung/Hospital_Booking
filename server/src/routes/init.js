import express from 'express'
import { createUser, getCRUDPage, getHome } from '../controllers/home'

const router = express.Router()

const initRouter = (app) => {
  router.get('/', getHome)
  router.get('/crud', getCRUDPage)
  router.post('/crud', createUser)
  return app.use('/', router)
}

export default initRouter
