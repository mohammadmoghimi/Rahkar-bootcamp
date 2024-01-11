
const User = require("../models/user")
exports.getUserData = async (req, res) => {
    console.log(req);
    try {
    let data = await User.create({
        name: req.body.name,
        mobile: req.body.mobile,

    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  