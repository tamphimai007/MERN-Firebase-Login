const express = require('express')
const router = express.Router()
// controllers
const { createAndUpdateUser, currentUser } = require('../Controllers/auth')
// Middleware
const { authCheck } = require('../Middleware/authCheck')

/* 
Endpoint http://localhost:5000/api/auth
access 
method post
*/
router.post('/auth', authCheck, createAndUpdateUser)
router.post('/current-user', authCheck, currentUser)


module.exports = router;