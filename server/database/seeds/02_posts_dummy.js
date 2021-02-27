
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          username: "samparker",
          first_name: "Sammy",
          last_name: "Parker",
          email: "samparker@gmail.com",
          password: "onetwothree",
        },
        {
          username: "aingsam",
          first_name: "Syamsul",
          last_name: "Zaman",
          email: "thesyamsulzaman@gmail.com",
          password: "onetwothree"
        },
        {
          username: "elliot.alderson",
          first_name: "Elliot",
          last_name: "Alderson",
          email: "elliot.alderson@ecorp.us",
          password: "onetwothree"
        },
      ], "id");
    });
};
