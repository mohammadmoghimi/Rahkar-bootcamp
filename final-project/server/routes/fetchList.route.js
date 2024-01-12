const express = require('express');
const router = express.Router();
 const uploadController = require("../controllers/picture.controller")

router.get('/fetchList' , uploadController.fetchList)

module.exports = router ;