const express = require("express");
const router = express.Router();
const { addToWallet } = require("../controllers/wallet.controller");
const verifyToken = require("../middleware/verifyToken")

router.post("/add-to-wallet" , verifyToken , addToWallet);

module.exports = router;