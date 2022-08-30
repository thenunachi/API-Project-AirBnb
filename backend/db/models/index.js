'use strict';

const fs = require('fs');//access files through filesystem so using library fs
const path = require('path');//The path module provides utilities for working with file and directory paths
const Sequelize = require('sequelize');
const basename = path.basename(__filename);//Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
const env = process.env.NODE_ENV || 'development';//env used here is dev
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
