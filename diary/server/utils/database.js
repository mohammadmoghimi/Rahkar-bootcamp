const mysql = require("mysql2/promise")


class DataBase {
constructor () {
    this.connection = undefined ; 
    this.createConnection() ;
}
async createConnection() {
    this.connection = await mysql.createConnection({
        host:'localhost' ,
        user:'root' ,
        password:'moghimigmail' ,
        database:'diary-project' //not sure about my database name
    })
}
}

module.exports = new DataBase() ;