// const { log } = require('console');
// const http = require('http')
// const  PORT = 3000 ;

// const server = http.createServer(( req , res ) =>{
//     res.statusCode = 200 ;
//     res.setHeader('Content-Type' , 'application/json')
//     var data = { 
//         message:"salammmmmmm bootcamp" ,
//         name:"mamad" ,
//         mobile:"31324"
//     }
//     res.end(JSON.stringify(data))
// })

// server.listen(PORT , () => {
//     console.log("ok");
// })

const express = require('express') ;
const cors = require('cors')
const body = require('body-parser')
const error = require('./error');
const logger = require('./error');
const book = require('./routes/bookRoute')


let users = [
    {
        id : 1 ,
        name:"mamad" ,
        books:[]
    } ,
    {
        id: 2 ,
        name :"kamala" ,
        books:[]

    }       
]


const app =express() ;
app.use(express.json())

app.use('/api/book' , book)


// app.use((req , res , next) => {
//     console.log("request object is : " , req ) ;
//         next()
 
// }),


//     app.get('/book',(req , res ) => {

//         const { id } = req.query ;
//         let founduser = users.find((user) => user.id == id)  ;

//         if (!founduser) {
//             error("user not found " , res , next)
//         }

//         res.json({
//             name:founduser.name
//         })
//     })
//     app.get('/' ,[logger] ,(req,res)=> {
        
//        res.json(users)
//     })


app.listen(4000 , () =>{
    console.log("is ok");
})