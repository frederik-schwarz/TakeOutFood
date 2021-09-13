
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tables').del()
    .then(function () {
      // Inserts seed entries
      return knex('tables').insert([
        {id: 1, table: 1, space: 4, booked: 0, name: '', time: '', number: 0},
        {id: 2, table: 2, space: 2, booked: 0, name: '', time: '', number: 0},
        {id: 3, table: 3, space: 6, booked: 0, name: '', time: '', number: 0},
      ]);
    });
};
