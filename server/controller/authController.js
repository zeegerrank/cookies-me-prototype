const asyncHandler = require("express-async-handler");
const User = require("../model/User");

exports.register = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const newUser = await User.create({
    username,
    password,
  });
  res.status(200).send(newUser);
});
