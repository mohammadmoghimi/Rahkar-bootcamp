const mysql =require('mysql2/promise');

class Database{
  constructor(){
    this.connection=undefined;
    this.createConnection()
  }
  async createConnection(){
    this.connection= await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password:'moghimigmail',
      database:'auth'
    })
  }
}

module.exports=new Database()