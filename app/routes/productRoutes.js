// Auth routes
const express = require('express');
// const { authMid } = require('../middlewares/authMiddlewares');
const { getAllProducts, generateFakeProducts, getProductById } = require('../views/productView.js');

const productRoutes = express.Router();

/** -------------------------------------------Routes--------------------------------------------------- */

productRoutes.get('/', getAllProducts);
productRoutes.get('/:id', getProductById);

productRoutes.post('/', generateFakeProducts);
// Illegal
productRoutes.get('/generate-data', generateFakeProducts);

module.exports = productRoutes;