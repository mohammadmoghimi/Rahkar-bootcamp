
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


exports.GetBooks = (req, res , next) =>{
    const { id } = req.params ;
    let founduser = users.find((user) => user.id == id)  ;

    if (!founduser) {
        error("user not found " , res , next)
    }

    res.json({
        books:founduser.books ,
    })
}

exports.GetBook = (req, res , next) =>{
    res.send("fbgfbwrtg")
}
