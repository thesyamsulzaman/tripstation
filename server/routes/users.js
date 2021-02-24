const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/auth");

const UserController = require("../controllers/user");
const User = require("../models/user");
const UserValidator = require("../validators/user");

router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getUser);
router.get("/auth", authenticateToken, UserController.auth);

router.delete("/:userId", UserController.delete);

router.post("/", UserValidator.registerValidator(), UserController.createUser);
router.put(
  "/:userId",
  UserValidator.updateValidator(),
  UserController.updateUser
);
router.post("/login", UserValidator.loginValidator(), UserController.loginUser);

module.exports = router;
