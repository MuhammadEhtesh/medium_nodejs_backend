"use strict";
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const db = require("./models/index");
const bodyParser = require("body-parser");
require("dotenv").config();
const customerRouter = require("./routes/customer.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

setTimeout(
  () =>
    db.sequelize
      .authenticate()
      .then(() => {
        db.sequelize.sync({ force: false });
        console.log(`Authenticated`);
      })
      .catch((err) => console.log(`Error occurred `, err)),
  20000
);

const port = process.env.PORT || 3000;
const dbPort = process.env.POSTGRES_PORT;

app.use("/", customerRouter);

process.on("unhandledRejection", (err) => {
  console.log(err);
});

app.listen(port, () =>
  console.log(
    `server is listening at ${port} and database is running at ${dbPort}`
  )
);
