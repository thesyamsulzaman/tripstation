exports.up = function(knex) {
  return knex.schema
    .createTable("users", function(table) {
      table.increments("id");
      table.string("username").unique("username");
      table.string("first_name");
      table.string("last_name");
      table.string("email").unique("email");
      table.string("hashed_password");
      table.string("salt");
      table.string("profile_picture").defaultTo("default.png");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("posts", function(table) {
      table.increments("id");
      table.string("title");
      table.string("body");
      table.integer("comments_count").defaultTo(0);
      table.integer("likes_count").defaultTo(0);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users").dropTable("posts");
};
