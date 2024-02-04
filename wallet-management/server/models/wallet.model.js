const db = require("../database/db");

class WalletModel {
    
    async addToWallet(userId , amount ) {
        try{
            const query = "UPDATE wallet SET amount = amount + ? WHERE user_id = ?" ;
            const queryAnswer = await db.connection.execute(query,[amount,userId])
            if(rows.affectedRows > 0){
                console.log("succesful");
                return { success : true}
            }
            else {
                console.log(error.message);
                return { success : false , message :"no need to update"}
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports =  WalletModel;