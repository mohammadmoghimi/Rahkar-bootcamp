const express=require("express")
const cors=require("cors")

const testRouter=require("./routes/test.route")

const PORT=3000;

app=express()
app.use(express.json())
app.use(cors())
app.use("/api/test",testRouter)



app.listen(PORT,()=>{
    console.log("it is running");
})