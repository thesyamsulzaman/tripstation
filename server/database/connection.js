const enviroment = require("./knexfile");
require("dotenv").config();

//const connect = require("knex")(enviroment.development);

module.exports = { connect: require("knex")(enviroment.development) };
