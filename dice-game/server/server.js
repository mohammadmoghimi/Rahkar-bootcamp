const express = require('express') ;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
const server = express() ;
module.exports = server ;
let players =[] ;
let isValidated = false ;

server.post('api/users' , (req , res) =>{
    const { user1 , user2 } = req.body ;
    if(user1 && user2) {
        players.push(user1 , user2) ;
        if (!isValidated) {
            isValidated = true;
          }
          res.status(200).json({ success: true, message: 'Users submitted successfully' });
    }
    else {
        // Send an error response if both users are not provided
        res.status(400).json({ success: false, message: 'Both users are required' });
      }
})
server.listen(666 , ()=>{
})
