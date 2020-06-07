const Class= require('../models/product')


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
exports.bookPages = async (req, res, next) => {
    //console.log('inside home....', req.user);
    res.render('book',{ title: 'welcome Home!', path: '/book' });
    
}

exports.aboutUsGet = async (req, res, next) => {
    //console.log('inside home....', req.user);
    res.render('aboutus',{ title: 'contuct Us!', path: '/aboutus' });
    
}