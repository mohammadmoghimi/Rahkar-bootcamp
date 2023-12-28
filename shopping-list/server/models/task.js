const { deleteTask } = require("../controller/task.controller");
const db = require("../utils/database")

class TaskModel {
    async createTask(task){
    try{     
          let title = task.title ;
    
        const query = "insert into tasks(title) values(?)" 
           await db.connection.execute(query,[title])
           return true
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
    async getTasks(task){
    try{         
        const query = "SELECT * FROM tasks" 
           let [data] = await db.connection.execute(query)
           return data
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
    async getTask(id){
    try{         
        const query = "SELECT * FROM tasks where id = ?" 
           let [data] = await db.connection.execute(query,[id])
           return data
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
    async changeStatus(id){
    try{         
        const querySelect = "SELECT * FROM tasks where id = ?" 
           let [dataSelect] = await db.connection.execute(querySelect,[id])

           if(dataSelect.length === 0) {
            throw new Error("task not found")
           }
           
        const queryUpdate = "update tasks set isDone = ? where id = ?" 
        let [data] = await db.connection.execute(queryUpdate,[!dataSelect[0].isDone,id])
           return true
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
    async editTitle(title,id){
    try{         
        const querySelect = "SELECT * FROM tasks where id = ?" 
           let [dataSelect] = await db.connection.execute(querySelect,[id])

           if(dataSelect.length === 0) {
            throw new Error("task not found")
           }
           
        const queryUpdate = "update tasks set title = ? where id = ?" 
        let [data] = await db.connection.execute(queryUpdate,[title,id])
           return true
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
    async deleteTask(id){
    try{         
        const querySelect = "SELECT * FROM tasks where id = ?" 
           let [dataSelect] = await db.connection.execute(querySelect,[id])

           if(dataSelect.length === 0) {
            throw new Error("task not found")
           }
           
        const queryDelete = "delete from tasks where id = ?" 
        let [data] = await db.connection.execute(queryDelete,[id])
           return true
    
           } catch (error) {
               console.log(error.message);
               throw new Error("error")
    
           }
    
    }
}

module.exports = new TaskModel() ;