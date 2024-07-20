const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/api/products', ProductController.createProduct);
router.get('/api/products', ProductController.getAllProducts);
router.get('/api/products/:id', ProductController.getProductById);

module.exports = router;

