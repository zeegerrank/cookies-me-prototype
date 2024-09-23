require("dotenv").config();

/**express server */
const express = require("express");
const app = express();
const port = 3500;
/**database */
const { connectDb } = require("./db/connectDb");
/**middleware */
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

/**apply widdleware here */
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDb(
  () => console.log("Database is connected"),
  app.listen(port, () => console.log(`Sever is listening at port ${port}`))
);
