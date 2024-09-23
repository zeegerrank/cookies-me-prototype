const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../model/User");

exports.register = asyncHandler(async (req, res) => {
  /**deconstruct from req body */
  const { username, password: prePassword } = req.body;
  /**check for duplicated username */
  const duplicatedUsername = await User.findOne({ username });
  if (duplicatedUsername) {
    return res
      .status(400)
      .send({ message: "This username is already used, please try another" });
  }
  /** prepare passsword before store */
  const hashed = hashPassword(prePassword);
  /**save to database */
  const newUser = await User.create({
    username,
    password: hashed,
  });

  return res.status(200).send({ message: "Registered Success!" });
});

exports.login = asyncHandler(async (req, res) => {
  /**deconstruct from req body */
  const { username, password } = req.body;

  /** find user by username */
  const foundUser = await User.findOne({ username });
  /**user not found */
  if (!foundUser) {
    return res.status(400).send({ message: "User not found" });
  }
  /**compare password */
  const validPassword = bcrypt.compareSync(password, foundUser.password);
  /**password invalid */
  if (!validPassword) {
    return res.status(400).send({ message: "Password Invalid" });
  }

  return res.status(200).send({ message: "Login Successful!" });
});

function hashPassword(raw) {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(raw, salt);
  return hashed;
}
