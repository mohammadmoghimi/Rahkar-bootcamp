const express = require("express")
const cors = require("cors")

const PORT = 3000 ;

app = express()

app.use(cors())

app.listen(PORT , () => {
    console.log("running");
})