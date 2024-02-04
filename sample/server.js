const express=require("express")
app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())

const userRoute = require('./routes/test.route')
const bookRoute = require('./routes/book.routes')

app.use("/api/users",userRoute)
app.use("api/books" , bookRoute)


const PORT=3000;
app.listen(PORT,()=>{
    console.log("it is running");
})