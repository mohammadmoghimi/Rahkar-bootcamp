
const Book=require("../models/user")
exports.getBookData = async (req, res) => {
    console.log(req);
    try {
    let data = await User.create({
        name: req.body.name,
        price: req.body.price,
    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  