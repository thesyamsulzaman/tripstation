const db = require("../database/connection").connect;

module.exports = {
  findAllUsers() {
    return db("users")
      .select("id","username","first_name", "last_name", "email", "updated_at", "created_at")
      .orderBy("updated_at", "desc");
  },
  findUserById(id) {
    return db("users")
      .select("id","username","first_name", "last_name", "email", "updated_at", "created_at")
      .where("id", id);
  },
  findUserByEmail(email) {
    return db("users").where("email", email);
  },
  findUserByUsername(username) {
    return db("users").where("username", username);
  },
  update(id,user) {
    return db("users").update(user, "id");
  },
  create(user) {
    return db("users").insert(user, "id");
  },
  delete(id) {
    return db("users").where("id", id).del();
  }
};
