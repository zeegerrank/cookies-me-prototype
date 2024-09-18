require("dotenv").config();

/**express server */
const express = require("express");
const app = express();
const port = 6500;
/**database */
const { connectDb } = require("./db/connectDb");
/**middleware */
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

/**apply widdleware here */
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDb(() =>
  app.listen(port, () =>
    console.log(`Database is connected and server is listening at port ${port}`)
  )
);
