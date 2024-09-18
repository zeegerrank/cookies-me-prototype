require("dotenv").config();

/**express server */
const express = require("express");
const app = express();
const port = 6500;
/**database */
const { connectDb } = require("./db/connectDb");
/**middleware */
const morgan = require("morgan");

/**apply widdleware here */
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDb(() =>
  app.listen(port, () => console.log(`Listening at port ${port}`))
);
