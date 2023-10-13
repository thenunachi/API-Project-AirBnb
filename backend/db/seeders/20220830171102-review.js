'use strict';
// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code
module.exports = {
  // async up (queryInterface, Sequelize) {
  /**
   * Add seed commands here.
   *
   * Example:
   * await queryInterface.bulkInsert('People', [{
   *   name: 'John Doe',
   *   isBetaMember: false
   * }], {});
  */
   async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews';  
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 4
      },
      {
        spotId: 2,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 1
      }, {
        spotId: 2,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 3,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 4,
        userId: 2,
        review: "MeBeautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!dium",
        stars: 5
      },
      {
        spotId: 5,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 4
      },
      {
        spotId: 6,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 5
      },
      {
        spotId: 7,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 8,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 2
      },
      {
        spotId: 9,
        userId: 2,
        review: "MedBeautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!ium",
        stars: 4
      },
      {
        spotId: 2,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 10,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 4
      },
      {
        spotId: 12,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 13,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 5
      },
      {
        spotId: 14,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 5
      },
      {
        spotId: 15,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },

      {
        spotId: 16,
        userId: 1,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 17,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 18,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 18,
        userId: 3,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 19,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      },
      {
        spotId: 20,
        userId: 2,
        review: "Beautiful place to getaway and relax! Communication  was great, we knew that if we needed anything, she was just a text away. We would love to come again!",
        stars: 3
      }

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Reviews'; 
    await queryInterface.bulkDelete(options);
  }
};
