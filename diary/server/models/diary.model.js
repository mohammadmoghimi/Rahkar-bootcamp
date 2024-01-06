    const db = require("../utils/database")

class DiaryModel {

    async submitDiary(diary){
        try{     
            let text = diary.text ;
            const query = "INSERT INTO diaries (text) VALUES (?)" 
               await db.connection.execute(query,[text])
               return true
            }  
        catch (error) {
            console.log(error.message);
            throw new Error("error")
                      }
            }

    async getAllDiaries(diary) {
        try{
            const query = "SELECT * FROM diaries" ;
            let [queryAnswer] = await db.connection.execute(query)
            return queryAnswer ;

        } catch(error){
            console.log(error.message);
            throw new Error("error") ;
        }
    }

    async getDiaryById(id) {

        try{
            const query = "SELECT * FROM diaries WHERE id = ?" ;
            let [queryAnswer] = await db.connection.execute(query , [id]) ;
            return queryAnswer ;

        } catch(error){
            console.log(error.message);
            throw new Error("error") ;
   
        }
    }

    async editDiaryText(text , id ) {

        try{
            const query = "SELECT * FROM diaries WHERE id = ?"
            let [queryAnswer] = await db.connection.execute(query) ;

            if(queryAnswer.length === 0) {   //could it also be written as !queryAnswer.length ???
                throw new Error("query not found !");
            }
            else {
                const queryUpdate = "UPDATE diaries SET text = ? WHERE id = ?" ;
                await db.connection.execute( queryUpdate ,  [text , id]) ;
                return true ;
            }
        } catch (error) {
            console.log(error.message);
            throw new Error("error")
        }
    }

    async deleteDiaryById(id) {
        
        try{         
            const query = "SELECT * FROM diaries where id = ?" 
               let [queryAnswer] = await db.connection.execute(queryAnswer,[id])
    
               if(queryAnswer.length === 0) {
                throw new Error("task not found")
               }
               else {
                   const queryDelete = "DELETE FROM diaries WHERE id = ?" 
                   await db.connection.execute(queryDelete,[id])
                   return true
               }
               } catch (error) {
                   console.log(error.message);
                   throw new Error("error")
        
               }
        
        }
}