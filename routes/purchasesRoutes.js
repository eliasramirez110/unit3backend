const express = require('express')
const purchaseRouter = express.Router()
const purchaseController = require('../controllers/purchasesController')

purchaseRouter.post('/create', purchaseController.create)

module.exports = purchaseRouter