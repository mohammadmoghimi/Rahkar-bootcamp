const UserModel = require("../models/user.model")

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
    const loginResult = await new UserModel().login(request.body) ;
    if (loginResult.success) {
      response.status(200).json({ message: loginResult.message });
    } else {
      response.status(401).json({ message: loginResult.message });
    }
  } catch (error) {
    response.json({message:"you dont have an account"})
    response.status(500).json({ message: 'Internal server error' });

  }
}

module.exports = {register , login}