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

/**apply middleware here */
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));

/**connect db and listen to port */
connectDb(
  () => console.log("Database is connected"),
  app.listen(port, () => console.log(`Sever is listening at port ${port}`))
);

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
