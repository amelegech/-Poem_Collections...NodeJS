const express= require('express');
const router= express.Router();
const shopController= require('../controllers/shopController')


router.get('/book', shopController.bookPages);

router.get('/aboutus', shopController.aboutUsGet);

router.get('/',shopController.getAllProducts);



module.exports= router;