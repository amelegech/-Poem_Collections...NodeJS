const express = require("express")

const productController = require('../controllers/productControler')

const route = express.Router();

// GET get add product form
route.get('/add-product', productController.addView);

// POST saves a new product
route.post('/save-product', productController.saveProduct);

// GET gets product list
route.get(['/', '/products'], productController.getAllProducts);

// GET gets a single product by Id
route.get('/products/:productId', productController.getProductById);

// GET gets edit page
route.get('/edit-product/:productId', productController.editProductPage);

// POST updates a single product
route.post('/edit-product', productController.editProductPost);

// POST delets a single product
route.post('/delete-product', productController.deleteProduct);

// route.get('/',controllermainView.mainView);
module.exports = route;
