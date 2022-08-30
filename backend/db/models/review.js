// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Review extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Review.belongsTo(models.User,{foreignKey:"userId"}),
//       Review.belongsTo(models.Spot,{foreignKey:"spotId"}),
//       Review.hasMany(models.ReviewImage,{foreignKey:"reviewId"})
//     }
//   }
//   Review.init({
//     spotId: {
//       type:DataTypes.INTEGER,
//       allowNull:false
//     },
//     userId:{
//       type:DataTypes.INTEGER,
//       allowNull:false
//     },
//     review:{
//       type:DataTypes.STRING,
//       allowNull:false
//     },
//     stars:{
//       type:DataTypes.INTEGER,
//       allowNull:false
//     }

//   }, {
//     sequelize,
//     modelName: 'Review',
//   });
//   return Review;
// };

"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ReviewImages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references: {model: "Reviews"}
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ReviewImages");
  }
};









