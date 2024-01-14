const { DataTypes } = require('sequelize');
const sequelize = require("../utils/database");

const Picture = sequelize.define('pictures' ,{
    id : {
        type :DataTypes.INTEGER ,
        primaryKey:true ,
        autoIncrement:true
    } ,
    description : {
        type:DataTypes.STRING ,
        allowNull : false 
    } ,
    image_path : {
        type:DataTypes.STRING // there could be a problem with image_path datatype since there are numbers involved in a path
    }
})

module.exports = Picture