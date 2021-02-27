
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "elliot.alderson",
          first_name: "Elliot",
          last_name: "Alderson",
          email: "elliot.alderson@ecorp.us",
          password: "onetwothree",
        },
      ], "id");
    });
};
