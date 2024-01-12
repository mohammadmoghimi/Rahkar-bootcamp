
const Book = require("../models/book");
const User=require("../models/user")
exports.getTestData = async (req, res) => {
    console.log(req);
    try {
    let data=await User.findAll({
      include:{ model: Book, as: 'Books' }
    });

    // let data=await User.findAll()
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  