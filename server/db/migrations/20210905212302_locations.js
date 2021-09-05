
exports.up = function(knex) {
    return knex.schema.createTable('locations', function(table) {
        table.increments('id').primary()
        table.string('city')
        table.string('street')
        table.string('open')
        table.string('close')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations')
};
