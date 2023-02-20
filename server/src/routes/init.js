import express from 'express'
import userRouter from './userRouter'
import authRouter from './authRouter'
import { createUser, getCRUDPage, getHome } from '../controllers/home'

const router = express.Router()

const initRouter = (app) => {
  router.get('/', getHome)
  router.get('/crud', getCRUDPage)
  router.post('/crud', createUser)
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/auth', authRouter)
  return app.use('/', router)
}

export default initRouter
