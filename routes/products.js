// AI-GENERATED: Basic route structure

const express = require('express');
const router = express.Router();
const productManager = require('../modules/product-manager');

// GET /products
router.get('/', (req, res) => {
  const products = productManager.getAllProducts();
  res.json(products);
});

module.exports = router;
