const express = require('express');
const testController = require('../controllers/test.controller');
const { getTestData } = require('../controllers/test.controller');

const router = express.Router()

router.get('/',getTestData );

module.exports = router