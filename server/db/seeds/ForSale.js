
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('forSale').del()
    .then(function () {
      // Inserts seed entries
      return knex('forSale').insert([
        {id: 1, item: 'Fries', course: "share", descirption: "Russet potatoes, peanut oil, sea salt", Img: "https://www.dinnerwithjulie.com/wp-content/uploads/2010/06/Cooks-Illustrated-Fries-585x392.jpg", price: 7, dietary: "V"},
        {id: 2, item: 'Popcorn Chicken', course: "share", descirption: "Popcorn chicken is a dish consisting of small, bite-sized pieces of chicken that have been breaded and fried.", Img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/popcorn-chicken-recipe-480x270.jpg", price: 10, dietary: "DF"},
        {id: 3, item: 'Chicken and Shitake Dumplings', course: "share", descirption: "Chicken dumplings uses fresh and dried shiitake mushrooms to give them a deep, meaty flavor", Img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Homemade-Fried-Dumplings-with-Soy-Sauce.png", price: 12},
        {id: 4, item: 'Pho', course: "main", descirption: "Phở or pho is a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat, sometimes chicken.", Img: "https://img.taste.com.au/pCftUVHb/w1200-h630-cfill/taste/2016/11/quick-beef-pho-75840-1.jpeg", price: 20, dietary: "DF"},
        {id: 5, item: 'Fried Rice', course: "Main", descirption: "Fried rice is a dish of cooked rice that has been stir-fried in a wok", Img: "https://img.taste.com.au/SspIaR1m/w1200-h630-cfill/taste/2016/11/fast-pork-fried-rice-107790-1.jpeg", price: 18, dietary: ""},
        {id: 6, item: 'Fried Noodles', course: "Main", descirption: "Image result for fried noodlesHeat oil in a deep frying pan over medium flame. Deep fry boiled noodles in batches until light brown and crispy.", Img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd21%2Fpad-thai-1097-d110633%2Fpad-thai-1097-d110633_horiz.jpg%3Fitok%3DOXGnJidj&q=85", price: 18, dietary: ""},
        {id: 7, item: 'Chicken Wonton', course: "starter", descirption: "A wonton, also spelled wantan, or wuntun in transliteration from Cantonese.", Img: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/49a12e682ad8-1.jpg", price: 12, dietary: "DF"},
        {id: 8, item: 'Pork Belly', course: "starter", descirption: "Pork belly is a boneless and fatty cut of meat from the belly of a pig,", Img: "https://static.wikia.nocookie.net/recipes/images/2/2c/ChiliHoneyGlazedLechonKawali.jpg/revision/latest?cb=20170902045322", price: 14, dietary: "GF"},
        {id: 9, item: 'Prawn Cutlets', course: "starter", descirption: "Clean and butterfly the prawns. Whisk together the eggs and milk in one bowl.", Img: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/WomansDayBR107395/prawn-cutlets.jpg?width=600&height=315&quality=75&mode=crop", price: 15, dietary: ""},
        {id: 10, item: 'Vege Dumplings', course: "share", descirption: "Crispy pan-fried Vegan Gyoza (Jiaozi) are Japanese Vegetable Dumplings, also called Potstickers.", Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmB5mrNzL9rUJufdJysIcdqSwa1-kYsRL4Q&usqp=CAU", price: 12, dietary: "VG"},
        {id: 11, item: 'Chicken Curry', course: "Main", descirption: "Chicken curry is a dish originating from the Indian subcontinent.", Img: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1.00xw:0.750xh;0,0.159xh&resize=640:*", price: 19, dietary: "GF"},

      ]);
    });
};
