const Router = require('express')
const router = new Router()

router.post('/registration')
router.post('/login')
router.get('/auth')
router.get('users')
router.delete('/delete')


module.exports = router