
exports.up = function(knex, Promise) {
  return knex.schema.createTable('collection', (table) => {
    table.increments()
    table.text('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('collection')
};
