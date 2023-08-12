const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController.js')

router.post('/', deviceController.create) // create new device
router.get('/:id', deviceController.getOne) // get one device
router.get('/', deviceController.getAll) // get all devices 
router.patch('/:id', deviceController.update) // change one device
router.delete('/:id', deviceController.delete) // delete one device

module.exports = router