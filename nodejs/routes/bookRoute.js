const express = require('express');
const router = express.Router();


const { GetBooks } = require("../controllers/bookController");

router.get("/:id",GetBooks);

module.exports = router;