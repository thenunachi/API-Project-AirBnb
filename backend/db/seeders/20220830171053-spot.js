'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Spots', [
      {
         ownerId:1,
         address:"Redmond,WA",
         city:"Redmond",
         state:"WA",
         country:"USA",
         lat:69.21,
         lng:42.43,
         name:"Thenu",
         description:"townhouse",
         price:49.21
       },
       {
        ownerId:2,
        address:"Seattle,WA",
        city:"Seattle",
        state:"WA",
        country:"USA",
        lat:79.21,
        lng:52.43,
        name:"Kalyan",
        description:"townhouse",
        price:78.21
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Spots', null, {});
  }
};
