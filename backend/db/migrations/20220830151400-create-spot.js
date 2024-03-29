'use strict';
// NEW: add this code to each create table migration file
let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code
module.exports = {
  up: async(queryInterface, Sequelize) =>{
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Users",
         // onDelete:"CASCADE"
        }
      },
      address:{
        type:Sequelize.STRING,
        allowNull:false
      },
      city:{
        type:Sequelize.STRING,
        allowNull:false
      },
      state:{
        type:Sequelize.STRING,
        allowNull:false
      },
      country:{
        type:Sequelize.STRING,
        allowNull:false
      },
      lat:{
        type:Sequelize.DECIMAL,
        allowNull:false
      },
      lng:{
        type:Sequelize.DECIMAL,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      description:{
        type:Sequelize.STRING,
        allowNull:false
      },
      price:{
        type:Sequelize.DECIMAL,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  down: async(queryInterface, Sequelize) =>{
    return queryInterface.dropTable("Spots", options);
  }
};