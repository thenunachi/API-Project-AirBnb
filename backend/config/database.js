const config = require('./index');

module.exports = {
  development: {
    storage: config.dbFile,//takes either node_env environment or development environment
    dialect: "sqlite",
    seederStorage: "sequelize",
    logQueryParameters: true,
    typeValidation: true
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    production: {
      // ...
      define: {         // define schema here
        schema: process.env.SCHEMA
      }
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};