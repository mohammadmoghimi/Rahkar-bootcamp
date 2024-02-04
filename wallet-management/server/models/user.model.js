// const client = require("../database/db");

// class UserModel {
//   constructor(client) {
//     this.client = client;
//   }

//   async register(user) {
//     const { mobile, password } = user;

//     try {
//       const result = await this.client.query(
//         "insert into users (mobile, password) values (? , ?)",
//         [mobile, password]
//       );
//       if (result.rows) return true;
//       else return false;
//     } catch (error) {
//       console.error("User Registration Error:", error);
//       return false;
//     }
//   }

//   async login(payload) {
//     const { mobile } = payload;
//     const enteredPass = payload.password;

//     try {
//       const result = await client.query(
//         "select id, password from users where mobile = ?",
//         [mobile]
//       );
//       if (result?.rows.length <= 0) {
//         return { success: false, message: "User not found ... !" };
//       }
//       const { id, password } = result.rows[0];
//       if (enteredPass === password) {
//         return { success: true };
//       } else {
//         return { success: false, message: "Invalid Credential ... !" };
//       }
//     } catch (error) {
//       return false;
//     }
//   }
// }

// module.exports =  UserModel;

const db = require ("../database/db")

class UserModel {

  async register(user) {
    const {mobile , password } = user ;
    try{
      const query = "INSERT INTO users (mobile,password) VALUES (?,?)" ;
      await db.connection.execute(query, [mobile , password]) ;
      return true ;

    } catch (error) {
      console.log(error.message );
    }
  }

  async login(user) {
    const {mobile , password} = user ;
    try{
      const query = "SELECT id FROM users WHERE mobile = ? AND password = ?";
      const [rows] = await db.connection.execute(query,[mobile , password])

      if(rows.length > 0){
        const userId = rows[0].id ;
        return { success: true, message: 'Login successful' , id:userId };
      }
      
      else
      return { success: false, message: 'Incorrect mobile or password' };

    } catch (error) {
      console.log(error.message);
      return { success: false, message: 'An error occurred during login' };
    }
  }
}

module.exports = UserModel ;