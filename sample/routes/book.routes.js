const express = require('express')
const booksCotroller = require('../controllers/book.controller')
const router = express.Router()

router.post('/books' , booksCotroller.getBookData)
router.post('/add' ,Add)

module.exports = router