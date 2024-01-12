const { DataTypes, Model } = require('sequelize');
const sequelize = require("../utils/database");
const User = require('./user'); // Import User model here

class Book extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    }, {
      sequelize,
      modelName: 'Book',
      timestamps: true,
    });
  }
}

module.exports = Book;
