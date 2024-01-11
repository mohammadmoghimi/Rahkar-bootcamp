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
        database:'bank '
    })
}
}

module.exports = new DataBase() ;