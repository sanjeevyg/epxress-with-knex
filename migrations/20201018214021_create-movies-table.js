
exports.up = function(knex) {
  return knex.schema.createTable('movie', table => {
      table.string('name'),
      table.integer('rating')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movie')
};
