const express = require('express');
const router = express.Router();
 const uploadController = require("../controllers/picture.controller")

 router.post('/upload', uploadController.upload);

module.exports = router ;