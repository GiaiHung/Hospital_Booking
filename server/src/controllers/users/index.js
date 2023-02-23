const db = require('../../models')

const getAllUsers = async (req, res) => {
  const data = await db.User.findAll()
  res.status(200).json({ status: 'success', data })
}

const getUser = async (req, res) => {
  const id = req.params.id
  const data = await db.User.findOne({ where: { id } })
  const { password, ...others } = data
  res.status(200).json({
    status: 'success',
    data: others,
  })
}

const createUser = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
    address,
    phonenumber,
    gender,
    roleId,
  } = req.body
  const ifUserExisted = await db.User.findOne({ where: { email } })
  if (ifUserExisted)
    return res.status(400).json({
      status: 'failed',
      message: 'User already exists. Please try another email!',
    })
  const salt = bcrypt.genSaltSync(10)
  const hash = await bcrypt.hashSync(password, salt)
  const user = await db.User.create({
    email,
    password: hash,
    firstName,
    lastName,
    address,
    phonenumber,
    gender: gender === '1' ? true : false,
    roleId,
  })
  res.status(201).json({ message: 'New user has been created', data: user })
}

const getUpdateUser = async (req, res) => {
  const userId = req.query.id
  if (!userId) {
    res.status(500).json({ message: 'Not having any user id' })
  }
  const user = await db.User.findByPk(userId)
  if (!user) {
    res.status(400).json({ message: 'User not found' })
  }

  res.render('user/user-edit.ejs', {
    data: user,
  })
}

const updateUserServer = async (req, res) => {
  const user = await db.User.findOne({ where: { id: req.body.id } })
  if (!user) return res.status(500).json({ message: 'User not found' })
  await user.update(req.body)
  res.redirect('/api/v1/users')
}

const updateUser = async (req, res) => {
  const id = req.params.id
  if (!id)
    return res.status(404).json({ status: 'failed', message: 'User not found' })
  const user = await db.User.findOne({ where: { id }, raw: false })
  if (!user) return res.status(500).json({ message: 'User not found' })
  user.email = req.body.email
  user.firstName = req.body.firstName
  user.lastName = req.body.lastName
  user.address = req.body.address
  user.gender = req.body.gender
  user.roleId = req.body.roleId
  await user.save()
  res.status(200).json({ status: 'success', message: 'User updated' })
}

const deleteUserServer = async (req, res) => {
  const id = req.query.id
  const user = await db.User.findByPk(id)
  if (!user) return res.status(500).json({ message: 'User not found' })
  await user.destroy()
  res.redirect('/api/v1/users')
}

const deleteUser = async (req, res) => {
  const id = req.params.id
  const user = await db.User.findByPk(id, { raw: false })
  if (!user) return res.status(500).json({ message: 'User not found' })
  await user.destroy()
  res.status(200).json({ status: 'success', message: 'User deleted' })
}

export {
  getAllUsers,
  getUser,
  createUser,
  getUpdateUser,
  updateUserServer,
  updateUser,
  deleteUserServer,
  deleteUser,
}
