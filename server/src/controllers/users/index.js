const db = require('../../models')

const getAllUsers = async (req, res) => {
  const data = await db.User.findAll({ raw: true })
  res.status(200).render('user.ejs', {
    data,
  })
}

export { getAllUsers }
