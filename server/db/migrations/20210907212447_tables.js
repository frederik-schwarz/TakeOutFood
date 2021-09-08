
exports.up = function(knex) {
    return knex.schema.createTable('tables', function(table) {
        table.increments('id').primary()
        table.integer('table')
        table.integer('space')
        table.integer('booked')
        table.string('name')
        table.string('time')
        table.string('number')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tables')
};
