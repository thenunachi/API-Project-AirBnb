const { sequelize } = require('./db/models');

sequelize.showAllSchemas({ logging: false }).then(async (data) => {
  // console.log(data,"DATA FROM SQL")
  // console.log(process.env.SCHEMA,"schema")
  if (!data.includes(process.env.SCHEMA)) {
    await sequelize.createSchema(process.env.SCHEMA);
  }
});