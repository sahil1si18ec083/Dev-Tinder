const express = require("express")

const authRouter = express.Router();
const {signupAuthController} = require("../controllers/authController")

authRouter.post("/signup", signupAuthController);

module.exports = authRouter;