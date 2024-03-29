'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpotImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SpotImage.belongsTo(models.Spot,{foreignKey:"spotId"})
    }
  }
  SpotImage.init({
    spotId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    url1: {
      type: DataTypes.STRING,
      allowNull:false
    },
    url2: {
      type: DataTypes.STRING,
      allowNull:false
    },
    url3: {
      type: DataTypes.STRING,
      allowNull:false
    },
    url4: {
      type: DataTypes.STRING,
      allowNull:false
    },
    url5: {
      type: DataTypes.STRING,
      allowNull:false
    },
    preview: {
      type: DataTypes.BOOLEAN,
      allowNull:false
    }
  }, {
    sequelize,
    schema: process.env.SCHEMA,
    modelName: 'SpotImage',
  });
  return SpotImage;
};