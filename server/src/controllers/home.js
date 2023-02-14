import db from '../models/index'

const getHome = async (req, res) => {
  try {
    const data = await db.User.findAll()
    return res.render('home.ejs', {
      data: JSON.stringify(data),
    })
  } catch (error) {
    console.log(error)
  }
}

export { getHome }
