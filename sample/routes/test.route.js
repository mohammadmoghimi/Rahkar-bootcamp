const express = require('express');
const userConroller = require('../controllers/user.controller')
const router = express.Router()


router.post('/user',userConroller.getUserData );

module.exports = router