const express = require("express");
const router = express.Router();

const { submitDiary , getAllDiaries , getDiaryById , editDiaryText , deleteDiaryById } 
= require("../controller/diary.controller")


router.post("/submit", submitDiary);
router.get("/get", getAllDiaries);
router.get("/get/:id", getDiaryById);
router.put("/edit/:id", editDiaryText);
router.delete("/delete/:id", deleteDiaryById);
