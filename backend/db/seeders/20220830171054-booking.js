'use strict';
// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings'; 
    await queryInterface.bulkInsert(options,[
    {
      spotId:1,
      userId:1,
      startDate:new Date('2022-02-17'),
      endDate:new Date('2022-02-19')
    },
    {
      spotId:2,
      userId:2,
      startDate:new Date('2022-02-15'),
      endDate:new Date('2022-02-19')
    },
    // {
    //   spotId:3,
    //   userId:3,
    //   startDate:new Date('2022-02-19'),
    //   endDate:new Date('2022-02-25')
    // }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Bookings'; 
     await queryInterface.bulkDelete(options);
  }
};
