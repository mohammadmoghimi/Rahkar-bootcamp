const TaskModel = require("../models/task")

exports.createTask = async (req, res) => {
  try{
       let result = await TaskModel.createTask(req.body)
   res.json({message:"successful"} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }


exports.getTasks = async (req, res) => {
  try{
       let result = await TaskModel.getTasks()
   res.json({result} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }

exports.getTask = async (req, res) => {
  try{
       let result = await TaskModel.getTask(req.params.id)
   res.json({result} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }

exports.changeStatus = async (req, res) => {
  try{
       let result = await TaskModel.changeStatus(req.params.id)
   res.json({message:"successfuly"} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }
  
exports.editTitle = async (req, res) => {
  try{
       let result = await TaskModel.editTitle(req.body.title,req.params.id)
   res.json({message:"successfuly"} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }

exports.deleteTask = async (req, res) => {
  try{
       let result = await TaskModel.deleteTask(req.params.id)
   res.json({message:"successfuly"} , 200)
  }
   catch (error){
    res.json({message:"error"} , 400)
   }
  }