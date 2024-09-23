const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

const register = router.post("/register", authController.register);

module.exports = router;
