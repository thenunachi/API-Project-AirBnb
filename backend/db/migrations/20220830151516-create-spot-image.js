'use strict';
// NEW: add this code to each create table migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SpotImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Spots',
        }
      },
      url1: {
        type: Sequelize.STRING,
        allowNull:false
      },
      url2: {
        type: Sequelize.STRING,
        allowNull:false
      },
      url3: {
        type: Sequelize.STRING,
        allowNull:false
      },
      url4: {
        type: Sequelize.STRING,
        allowNull:false
      },
      url5: {
        type: Sequelize.STRING,
        allowNull:false
      },
      preview: {
        type: Sequelize.BOOLEAN,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SpotImages', options);
  }
};