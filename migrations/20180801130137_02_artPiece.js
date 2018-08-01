
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artPiece', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('firingType')
    table.text('clayBody')
    table.date('dateCreated')
    table.float('price')
    table.boolean('new')
    table.integer('collection_id').references('collection.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('artPiece')
};
