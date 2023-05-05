const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMisDatos, getUsers } = require('../controllers/userController')
const { protect } = require('../middleware/authMw')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/allusers', getUsers)
router.get('/misdatos', protect, getMisDatos)



module.exports = router

