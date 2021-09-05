
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('basket').del()
    .then(function () {
      // Inserts seed entries
      return knex('basket').insert([
        {id: 1, item: 'Fries', course: "share", descirption: "Russet potatoes, peanut oil, sea salt", Img: "https://www.dinnerwithjulie.com/wp-content/uploads/2010/06/Cooks-Illustrated-Fries-585x392.jpg", price: 7, dietary: "Vegan"},
        {id: 2, item: 'Popcorn Chicken', course: "share", descirption: "Popcorn chicken is a dish consisting of small, bite-sized pieces of chicken that have been breaded and fried.", Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/popcorn-chicken-recipe-480x270.jpg", price: 10, dietary: "Dairy Free"},
      ]);
    });
};
