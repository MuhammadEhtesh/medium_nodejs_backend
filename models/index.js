const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  username: "postgres",
  password: "12345",
  database: "angular",
  logging: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Customers = require("./customer")(sequelize, Sequelize);

module.exports = db;
