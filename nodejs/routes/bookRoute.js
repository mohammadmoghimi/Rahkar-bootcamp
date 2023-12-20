const express = require('express') ;
const router = express.Router() ;

const { GetBooks, GetBook } = require('../controllers/bookController.js')

router.get("/:id" , GetBooks)
router.get("/" , GetBook)


module.exports = router ;