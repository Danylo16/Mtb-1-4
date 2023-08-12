const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration) // registration
router.post('/login', userController.login) // login
router.get('/auth', userController.check) // check if user is registered 


module.exports = router