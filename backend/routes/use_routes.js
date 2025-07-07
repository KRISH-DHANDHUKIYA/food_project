const express = require('express')
const { registerUser, loginUser, adminUser } = require('../controllers/user_controller')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/admin', adminUser)

module.exports = router;