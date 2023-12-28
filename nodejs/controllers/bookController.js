let users = [
    {
      id: 1,
      name: "Alireza",
      books: [],
    },
    {
      id: 2,
      name: "Kamal",
      books: [],
    }
  ];
  
  exports.GetBooks = (req, res) => {
    const {id} = req.params;
  
    let findedUser = users.find((user) => user.id == id);
    if (!findedUser) ErrorHandler("User not found", res, next);
  
    res.json({
        books: findedUser.books,
    });
  };