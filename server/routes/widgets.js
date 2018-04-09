var widgetController = require('../controllers/widgetController')
var express = require('express')

const router = express.Router()

/* GET users listing. */

router.get('/', widgetController.getAll)
router.get('/edit/:id', widgetController.getOne)
router.get('/delete/:id', widgetController.delete)

router.post('/', widgetController.create)
router.post('/update', widgetController.update)

module.exports = router
