const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user");
const UserValidator = require("../validators/user");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAllUsers();
    res.json({ users }).status(200);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getUser = (req, res, next) => {
  const id = req.params.userId;
  User.findUserById(id)
    .then(user => {
      if (user.length === 0) {
        res.status(404).json({ message: "User is not found" });
      }
      res.json(user);
    })
    .catch(err => res.json(err));
};

exports.removeUser = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = await User.delete(id);
    if (!user.length > 0)
      res.status(404).json({ message: "User is not found" });
    res.json({ profile: user }).status(200);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.auth = (req, res, next) => {
  res.json(req.body.user);
};

exports.createUser = async (req, res, next) => {
  const { username, first_name, last_name, email, password } = req.body;

  try {
    const Errors = validationResult(req);
    if (!Errors.isEmpty()) return res.json(Errors.mapped());

    const salt = Math.round(new Date().valueOf() * Math.random()) + "";
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      first_name,
      last_name,
      email,
      hashed_password: hashedPassword,
      salt
    });

    if (!newUser) res.json({ status: 401, message: "User creation failed" });
    res.json({ status: 201, message: "User Succesfully Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res, next) => {
  const id = parseInt(req.params.userId);
  const { username, first_name, last_name, email } = req.body;

  try {
    const Errors = validationResult(req);
    if (!Errors.isEmpty()) return res.json(Errors.mapped());

    const newUser = await User.update(id, {
      username,
      first_name,
      last_name,
      email
    });

    if (!newUser) res.json({ status: 401, message: "Updating user failed" });
    res.json({ status: 201, message: "User Succesfully Updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const Errors = validationResult(req);
    if (!Errors.isEmpty()) return res.json(Errors.mapped());

    const user = await User.findUserByUsername(username);
    const passwordMatches = await bcrypt.compare(
      password,
      user[0].hashed_password
    );

    if (!passwordMatches) return res.json({ message: "Wrong Password" });

    const accessToken = jwt.sign(user[0], process.env.ACCESS_TOKEN_KEY, {
      expiresIn: "15min"
    });

    res.json({
      status: 201,
      message: "User Succesfully Authenticated",
      accessToken
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.delete = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.delete(userId);
    if (!deletedUser) res.status(404).json({ error: "User not found" });
    res.status(201).json({ message: "User deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
