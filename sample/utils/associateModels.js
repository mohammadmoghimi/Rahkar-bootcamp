const User = require('../models/user');
const Book = require('../models/book');

User.hasMany(Book);
Book.belongsTo(User, { foreignKey: 'user_id' });