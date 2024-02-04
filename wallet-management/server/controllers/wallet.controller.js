const WalletModel = require("../models/wallet.model");
const Response = require("../utils/Response");

exports.addToWallet = async (request , response ) => {
    try{
        const userId = request.userId ;
        const {amountToAdd} = request.body;
        const result = await new WalletModel().addToWallet(userId , amountToAdd)
        
        if (result.success) {
            response.json({message:"successfuly added to the wallet"})           
        }
        else{
            response.json({message:"not successful"})
        }
    } catch (error) {
        next(error)
    }
}

