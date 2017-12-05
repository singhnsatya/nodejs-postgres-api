

// create a table using knex
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
  	table.increments();
  	table.text('name');
  	table.integer('age');
  	table.text('gender');
  	table.integer('number');
  	table.text('email');
  })
};

// drop a table using knex
exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
