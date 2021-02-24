const { check, validationResult, body } = require("express-validator");
const User = require("../models/user");

module.exports = {
  _runValidation(req, res) {
    const Errors = validationResult(req);
    if (!Errors.isEmpty()) return res.json(Errors.mapped());
  },
  loginValidator() {
    return [
      check("username").not().isEmpty().withMessage("Username is empty"),
      body("username").custom(value => {
        return User.findUserByUsername(value).then(user => {
          console.log(user);
          if (user.length === 0) {
            return Promise.reject("User not found ");
          }
        });
      }),
      check("password")
        .not()
        .isEmpty()
        .isLength({ min: 5 })
        .withMessage("Password should be more than 5 characters")
    ];
  },
  updateValidator() {
    return [
      check("username").not().isEmpty().withMessage("Username is required"),
      check("first_name").not().isEmpty().withMessage("First name is required"),
      check("last_name").not().isEmpty().withMessage("Last name is required"),
      check("email")
        .not()
        .isEmpty()
        .isEmail()
        .normalizeEmail()
        .withMessage("Email name is required"),
    ];

  },
  registerValidator() {
    return [
      check("username").not().isEmpty().withMessage("Username is required"),
      check("first_name").not().isEmpty().withMessage("First name is required"),
      check("last_name").not().isEmpty().withMessage("Last name is required"),
      check("email")
        .not()
        .isEmpty()
        .isEmail()
        .normalizeEmail()
        .withMessage("Email name is required"),
      body("email").custom(value => {
        return User.findUserByEmail(value).then(user => {
          if (user.length > 0) {
            return Promise.reject("Email had already been used");
          }
        });
      }),
      body("username").custom(value => {
        return User.findUserByUsername(value).then(user => {
          if (user.length > 0) {
            return Promise.reject("Username had been used");
          }
        });
      }),
      check("password")
        .not()
        .isEmpty()
        .isLength({ min: 5 })
        .withMessage("Password should be more than 5 characters")
    ];
  }
};
