
exports.up = function(knex) {
    return knex.schema.createTable('forSale', function(table) {
        table.increments('id').primary()
        table.string('item')
        table.string('course')
        table.string('descirption')
        table.string('Img')
        table.integer('price')
        table.string('dietary')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('forSale')
};
