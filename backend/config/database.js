const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,//takes either node_env environment or development environment
    dialect: "sqlite",
    seederStorage: "sequelize",
    // logging: true,
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};