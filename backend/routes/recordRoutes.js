const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController')

router.get('/get-records', recordController.getRecordData)

module.exports = router