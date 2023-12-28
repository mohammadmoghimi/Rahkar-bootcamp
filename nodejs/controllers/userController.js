const UserModel = require("../models/user");


exports.GetUsers = async (req, res ) => {
  // const connection = await  mysql.createConnection({
  //   host: 'localhost',
  //   user: 'root',
  //   password:'',
  //   database: 'bootcamp'
  // });
  // let [rows]=await connection.execute("SELECT * FROM users where name LIKE '%ل%'")
  let users = await UserModel.getUser();
  res.json(users);
};

exports.GetUserById = async (req, res) => {
  const { id } = req.params;
  let user = await UserModel.getUserById(id);
  res.json(user);
}

exports.AddUser = async (req, res) => {
  let result = UserModel.addUser(req.body);
  res.json(result);
};