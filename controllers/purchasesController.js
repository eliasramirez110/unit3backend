const models = require('../models')

const purchaseController = {}

purchaseController.create = async(req, res) => {
  try {
    const purchase = await models.purchase.create({
      total: req.body.total
    })
    const user = await models.user.findOne({
      where: {
        id: req.body.userId //will change to headers when Frntnd is done
      }
    })
    const userPurchase = await user.addPurchase(purchase)
    res.json({userPurchase})
  } catch (error) {
    res.json({error})
  }
}



module.exports = purchaseController