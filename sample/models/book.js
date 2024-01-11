const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database") ;

const User = sequelize.define('book', {
  id: {
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
});

console.log(User === sequelize.models.User); 

book.belongsTo(User, {foreignKey:'userId'})

module.exports = User;