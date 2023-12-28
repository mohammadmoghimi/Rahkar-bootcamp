const db = require("../utils/database");

class UserModel {

  async getUser() {
    const query = "select * from users";
    let [users] = await db.connection.execute(query);
    return users;
  }

  async getUserById(id, res) {
    const query = "select * from users where id = ?";
    let [user] = await db.connection.execute(query, [id]);
    return user;
  }

  async addUser(user) {
    const { name, mobile } = user;
    const query = "insert into users (name, mobile) values (? , ?)";
    let res = await db.connection.execute(query, [name, mobile])
    return res;
  }
  
  async register(user) {
    const { username , password } = data ;
  }


}

module.exports = new UserModel();