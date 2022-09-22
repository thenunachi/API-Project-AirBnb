'use strict';

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
    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 1,
        review: "Good",
        stars: 4
      },
      {
        spotId: 2,
        userId: 2,
        review: "Bad",
        stars: 1
      }, {
        spotId: 2,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 3,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 4,
        userId: 2,
        review: "Medium",
        stars: 5
      },
      {
        spotId: 5,
        userId: 1,
        review: "Medium",
        stars: 4
      },
      {
        spotId: 6,
        userId: 2,
        review: "Medium",
        stars: 5
      },
      {
        spotId: 7,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 8,
        userId: 1,
        review: "Medium",
        stars: 2
      },
      {
        spotId: 9,
        userId: 2,
        review: "Medium",
        stars: 4
      },
      {
        spotId: 2,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 10,
        userId: 1,
        review: "Medium",
        stars: 5
      },
      {
        spotId: 11,
        userId: 3,
        review: "Medium",
        stars: 4
      },
      {
        spotId: 12,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 13,
        userId: 2,
        review: "Medium",
        stars: 5
      },
      {
        spotId: 14,
        userId: 2,
        review: "Medium",
        stars: 5
      },
      {
        spotId: 15,
        userId: 1,
        review: "Medium",
        stars: 3
      },

      {
        spotId: 16,
        userId: 1,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 17,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 18,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 18,
        userId: 3,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 19,
        userId: 2,
        review: "Medium",
        stars: 3
      },
      {
        spotId: 20,
        userId: 2,
        review: "Medium",
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
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
