const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const customerRouter = require("./routes/customer.routes");

const db = require("./models/index");
db.sequelize.sync();

app.use("/", customerRouter);

process.on("unhandledRejection", (err) => {
  console.log(err);
});

app.listen(3000, () => console.log("server is listening"));
