const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController.js')

router.post('/add-to-basket')// add
router.get('/')// get basket 


module.exports = router