const express = require("express") 
const router = express.Router()
const pictureController = require("../controllers/picture.controller")

router.get('/list' , pictureController.fetchList)

router.post('/upload' , pictureController.upload)

module.exports = router