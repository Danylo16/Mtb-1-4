const Router = require('express')
const router = new Router()

router.use('/user')
router.use('/device')
router.use('/basket')


module.exports = router