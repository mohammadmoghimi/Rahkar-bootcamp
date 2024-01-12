const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/database")

const Picture = sequelize.define('Picture', {
    id :{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    } ,
  description: {
    type: DataTypes.STRING,
  },
  image_path: {
    type: DataTypes.STRING,
  },
});

module.exports = Picture;
