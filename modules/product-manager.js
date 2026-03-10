// AI-GENERATED: Initial product list
// HUMAN-MODIFIED: Added categories, descriptions, IDs

const Product = require('./product');

const products = [
  new Product(1, "Espresso", 2.75, "coffee", "Strong, rich espresso shot."),
  new Product(2, "Latte", 4.25, "coffee", "Espresso with steamed milk."),
  new Product(3, "Mocha", 4.75, "coffee", "Chocolate + espresso + milk."),
  new Product(4, "Cappuccino", 4.00, "coffee", "Foamy espresso drink."),
  new Product(5, "Blueberry Muffin", 3.00, "pastry", "Fresh baked muffin."),
  new Product(6, "Croissant", 3.25, "pastry", "Flaky butter croissant."),
  new Product(7, "Turkey Sandwich", 7.50, "sandwich", "Turkey on whole wheat."),
  new Product(8, "Ham & Swiss Sandwich", 7.25, "sandwich", "Classic deli sandwich.")
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

module.exports = {
  getAllProducts,
  getProductById
};
