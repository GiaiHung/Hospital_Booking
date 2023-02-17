import express from 'express'
import {
  deleteUser,
  getAllUsers,
  getUpdateUser,
  updateUser,
} from '../controllers/users'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/edit', getUpdateUser)
router.post('/edit', updateUser)
router.delete('/delete', deleteUser)
router.get('/delete', deleteUser)

export default router
