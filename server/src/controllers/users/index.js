const db = require('../../models')

const getAllUsers = async (req, res) => {
  const data = await db.User.findAll({ raw: true })
  res.status(200).render('user/user.ejs', {
    data,
  })
}

const getUpdateUser = async (req, res) => {
  const userId = req.query.id
  if (!userId) {
    res.status(500).json({ message: 'Not having any user id' })
  }
  const user = await db.User.findByPk(userId, { raw: true })
  if (!user) {
    res.status(400).json({ message: 'User not found' })
  }

  res.render('user/user-edit.ejs', {
    data: user,
  })
}

const updateUser = async (req, res) => {
  const user = await db.User.findOne({ where: { id: req.body.id } })
  if (!user) return res.status(500).json({ message: 'User not found' })
  await user.update(req.body)
  res.redirect('/api/v1/users')
}

const deleteUser = async (req, res) => {
  const id = req.query.id
  const user = await db.User.findByPk(id)
  if (!user) return res.status(500).json({ message: 'User not found' })
  await user.destroy()
  res.redirect('/api/v1/users')
}

export { getAllUsers, getUpdateUser, updateUser, deleteUser }
