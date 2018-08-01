
exports.up = function(knex, Promise) {
  return knex.schema.createTable('image', (table) => {
    table.increments()
    table.text('imageUrl')
    table.integer('artPiece_id').references('artPiece.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('image')
};
