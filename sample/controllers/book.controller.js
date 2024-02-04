
const Book=require("../models/book")
exports.getBookData = async (req, res) => {
    console.log(req);
    try {
    let data = await Book.create({
        name: req.body.name,
        price: req.body.price,
        user_id:req.body.user_id 
    });
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }

  exports.Add = async (req, res) => {

    await Users.hasMany(book,{foreignKey:'id'});
    await Books.belongsTo(User,{foreignKey:'user_id'});
    let data=await Books.findAll({ include:[User]});
    res.json(data)
      
  }
  