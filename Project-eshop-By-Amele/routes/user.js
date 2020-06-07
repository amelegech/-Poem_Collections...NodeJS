const express= require('express');
const router= express.Router();
const Usercontroller = require('../controllers/userController');
 

router.get('/login',Usercontroller.getLogInForm);
router.post('/login',Usercontroller.postLogin);
router.get('/signup',Usercontroller.getSignUpForm);
router.post('/signup',Usercontroller.postSignUP);

module.exports= router;
