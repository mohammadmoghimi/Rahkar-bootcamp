const UserModel = require("../models/user.model")
const jwt = require('jsonwebtoken')

const register = async (request , response , next ) => {
  try{ 
    await new UserModel().register(request.body)
    response.json({message:"successfuly registered"} , 200 )
  } catch (error) {
    next(error)
  }
}

const login = async (request , response , next ) => {
  try{
    const user = await new UserModel().login(request.body) ;
    if (user.success) {
      const token = generateToken(user.id) ;
      response.status(200).json({ message: user.message , token  });
    } else {
      response.status(401).json({ message: user.message });
    }
  } catch (error) {
    response.json({message:"you dont have an account"})
    response.status(500).json({ message: 'Internal server error' });

  }
}

const generateToken = (userId) => {
  return jwt.sign({ userId } , process.env.jWT_SECRET , {
    expiresIn:process.env.jWT_SECRET ,
  }) ;
} ;

module.exports = {register , login}