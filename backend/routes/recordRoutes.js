const express = require('express')
const router = express.Router()
const recordController = require('../controllers/recordController')

router.get('/get-records', recordController.getRecordData)
router.get('/get-saved-records', recordController.getSavedRecords)
router.post('/create-record', recordController.createRecord)
router.delete('/record/:id', recordController.deleteRecord)

module.exports = router