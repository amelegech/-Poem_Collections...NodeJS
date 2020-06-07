const Product = require('../models/product');

exports.saveProduct = (req, res, next) => {
    const title = req.body.title ||'words of ';
    const imageUrl = req.body.imageUrl || '/images/img11.jpg'; 
    const price = req.body.price || 19.99;
    const description = req.body.description || 'My first book published 2006 ec';
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl
    });
    product.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
}

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            console.log(products)
            res.render('products', {
                pageTitle: 'Home',
                path: '/products',
                products: products
            });
        })
        .catch(err => console.log(err));
}

// view details
exports.getProductById = (req, res, next) => {
    Product.findById(req.params.productId)
        .then(products => {
            console.log('products', products);
            res.render('viewdetails', { viewdetails: products, prod: products, path: '/', pageTitle: 'Product dtail page' })
        })
        .catch(err => console.log(err))
};

// get edit form
exports.editProductPage = (req, res, next) => {
    const productId = req.params.productId;

    Product.findById(productId)
        .then(product => {
            res.render('edit', {
                prod: product,
                pageTitle: 'Edit Product',
                path: '/',
            });
        })
        .catch(err => console.log(err));


}

// edit product 
exports.editProductPost = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.findById(id).then(prod => {
        prod.title = title;
        prod.imageUrl = imageUrl;
        prod.price = price;
        prod.description = description;
        return prod.save();
    })
        .then(result => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

}


exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.body.id)
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err))

}


exports.addView = (req, res) => {
    res.render('add.ejs')
}

exports.mainView = (req, res) => {

    res.render('main')

}