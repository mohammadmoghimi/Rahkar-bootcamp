function Errorhandler  (message, res , next , )  {
if ( message) {
    res.json({
        message 
    })
}     
   next()
}

function logger(req , res , next)  {
    console.log("request incoming ...") ;
        next()
}

module.exports = Errorhandler
module.exports = logger