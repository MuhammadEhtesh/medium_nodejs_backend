const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "12345",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "postgres",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE || "angular",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Customers = require("./customer")(sequelize, Sequelize);

module.exports = db;
