const jwt = require('jsonwebtoken')

function verifyToken(req,res,next) {
    const token = req.header('Authorization')

    if(!token) {
        return res.status(401).json({message:"Unauthorized"}) ;
    }

    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ;
        req.userId = decoded.userId ;
        next() ;
    } catch (error) {
        return res.status(401).json({message:'invalide token'})
    }
}

module.exports = verifyToken