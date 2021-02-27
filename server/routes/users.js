const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/auth");

const UserController = require("../controllers/user");
const User = require("../models/user");
const UserValidator = require("../validators/user");

const upload = require("../middleware/uploader");
//const multer = require("multer");
//const upload = multer();

router.get("/", UserController.getAllUsers);
router.get("/:userId", UserController.getUser);
router.get("/auth", authenticateToken, UserController.auth);

router.delete("/:userId", UserController.delete);

router.post(
  "/",
  upload.single('profile_picture'),
  UserValidator.registerValidator(),
  UserController.createUser
);

router.put(
  "/:userId",
  upload.single('profile_picture'),
  UserValidator.updateValidator(),
  UserController.updateUser
);

router.post("/login", UserValidator.loginValidator(), UserController.loginUser);

module.exports = router;
