const express = require('express');
const router = express.Router();
const { GetUsers, GetUserById, AddUser } = require("../controllers/userController");

router.get("/", GetUsers)
      .get("/:id", GetUserById)
      .post("/", AddUser);

module.exports = router;