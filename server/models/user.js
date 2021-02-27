const db = require("../database/connection").connect;
const fs = require("fs");

module.exports = {
  findAllUsers() {
    return db("users")
      .select(
        "id",
        "username",
        "first_name",
        "last_name",
        "email",
        "profile_picture",
        "updated_at",
        "created_at"
      )
      .orderBy("updated_at", "desc");
  },
  findUserById(id) {
    return db("users")
      .select(
        "id",
        "username",
        "first_name",
        "last_name",
        "email",
        "profile_picture",
        "updated_at",
        "created_at"
      )
      .where("id", id);
  },
  findUserByEmail(email) {
    return db("users").where("email", email);
  },
  findUserByUsername(username) {
    return db("users").where("username", username);
  },
  update(id, user) {
    return db("users").update(user, "id");
  },
  create(user) {
    return db("users").insert(user, "id");
  },
  delete(id) {
    this.findUserById(id).then(user => {
      fs.unlink(`./uploads/${user[0].profile_picture}`,(err) => {
        if (err) {
          console.log(err);
        }
      })
    });
    return db("users")
      .where("id", id)
      .del();
  }
};
