
const express = require("express");
const router = express.Router();

const { createTask,getTasks,changeStatus , deleteTask , getTask,editTitle} = require("../controller/task.controller")

router.post("/add", createTask);
router.get("/get", getTasks);
router.get("/get/:id", getTask);
router.get("/status/:id", changeStatus);
router.put("/edit/:id", editTitle);
router.delete("/delete/:id", deleteTask);

module.exports = router;