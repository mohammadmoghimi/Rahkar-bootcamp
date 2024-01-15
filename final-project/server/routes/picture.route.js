const express = require("express") 
const router = express.Router()
const {upload , fetchList} = require("../controllers/picture.controller")

router.get('/list' , fetchList)

router.post('/upload' , upload)

module.exports = router