const mongoose = require("mongoose");

async function connectDb(cb) {
  await mongoose.connect(process.env.MONGODB_SERVER).then(cb, (err) => {
    console.log(err.errmsg);
  });
}

module.exports = { connectDb };
