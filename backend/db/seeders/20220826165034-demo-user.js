'use strict';
// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';  
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        firstName:"demo",
        lastName:"user",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        firstName:"demo",
        lastName:"user1",
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        firstName:"demo",
        lastName:"user2",
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options); 
    // return queryInterface.bulkDelete('Users', {
    //   username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }, {});
  }
};