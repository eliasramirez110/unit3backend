const models = require('../models')

const userController = {}

userController.create = async(req, res) => {
  try {
    const user = await models.user.create({
      name: req.body.name, 
      password: req.body.password,
      email: req.body.email,
      cardname: req.body.cardname,
      cardnumber: req.body.cardnumber,
      expdate: req.body.expdate
    })
    res.json({
      user
    })
  } catch (error) {
    res.json({error})
  }
}

userController.login = async(req, res) => {
  try {
    const user = await models.user.findOne({
      where:{
        email: req.body.email
      }
    })
    if(user.password === req.body.password) {
      res.json({
        user
      })
    }
  } catch (error) {
    res.json({error})
  }
}

userController.destroy = async(req, res) => {
  try {
    const user = await models.user.findOne({
      where:{
        id: req.params.id //will change later to headers
      }
    })
    const destroyUser = await user.destroy()
    res.json({destroyUser})
  } catch (error) {
    res.json({error})
  }
}

module.exports = userController