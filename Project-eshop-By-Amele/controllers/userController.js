const User = require('../models/user');


exports.getLogInForm = (req, res, next) => {
    res.render('login');
}

exports.postLogin = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    // get a user with this email from the db
    User.findOne(email).then(user => {
        console.log('found user.............')
        console.log(user);
        res.redirect('/products');
    }).catch(err => {
       // redirect('/login');
       console.log(err)
    })
    // if there is one compare the passord
    // if the password matches redirct to product page
    // else redirect to signin page
  
}

exports.getSignUpForm = (req, res, next) => {
    console.log(req.body);
    res.render('signup');
}

exports.postSignUP = (req, res, next) => {
console.log('Inside postSignUP...................')
    // console.log(req.body);
    // const email = req.body.email;
    // const password = req.body.password;
    // // const user = new User({
    // //     email: email,
    // //     password: password,
    // // });
    // User.find({email: email}).then(user => {
    //     console.log('found user.....');
    //     console.log(user);
    //     res.redirect('/')
    // })
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    let tempUser = new User({email : email, password: password})
            tempUser.save().then(()=>{
        
            res.redirect('/login');
        
    }).catch(err => console.log(err))
    
}
//static findById(userId) {
    //return new User(ObjectID('5e64bafe289f4b36006510d6'));
    // const db = getDb();
    // return db.collection('Users')
    //     .findOne({ _id: new ObjectID(userId) })
//}


