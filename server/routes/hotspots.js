var hotspotController = require('../controllers/hotspotController')
var express = require('express')

const router = express.Router()

/* GET users listing. */

router.get('/', hotspotController.getAll)
router.get('/{id}', hotspotController.getOne)

router.post('/', hotspotController.create)
router.post('/update/{id}', hotspotController.update)
router.post('/delete/{id}', hotspotController.delete)

module.exports = router
