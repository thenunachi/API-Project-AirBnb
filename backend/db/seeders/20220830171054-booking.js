'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings',[
    {
      spotId:1,
      userId:1,
      startDate:'2022-02-17',
      endDate:'2022-02-19'
    },
    {
      spotId:2,
      userId:2,
      startDate:'2022-02-15',
      endDate:'2022-02-19'
    },
    {
      spotId:2,
      userId:3,
      startDate:'2022-02-19',
      endDate:'2022-02-25'
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Bookings',null, {});
  }
};
