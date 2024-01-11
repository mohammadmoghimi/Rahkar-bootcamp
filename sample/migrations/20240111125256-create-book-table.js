'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('book' ,{
      id:{
        allowNull:false ,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      } ,
      name:{
        type: Sequelize.STRING,
        allowNull:false,
       },
       price:{
        type:Sequelize.INTEGER ,
        allowNull:false
       }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};

