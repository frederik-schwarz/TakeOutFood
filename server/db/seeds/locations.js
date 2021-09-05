
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, city: 'Wellington', street: "95 Dixon", open: "9am", close: "10pm"},
        {id: 2, city: 'Auckland', street: "10 Dougal", open: "9am", close: "10pm"},
        {id: 3, city: 'Auckland', street: "25 Ball", open: "9am", close: "10pm"},
      ]);
    });
};
