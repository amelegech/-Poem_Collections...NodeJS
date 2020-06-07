const express = require('express');
// const mongoConnect = require('./util/DB').mongoConnect;
const mongoose = require('mongoose');
// const session = require('express-session');
// const bcrypt = require('bcryptjs')
// const cors = require('cors')
const dotenv = require('dotenv');

const path = require('path');
const bodyParser = require('body-parser');
const productRoute = require('./routes/product');

const useRoutes = require('./routes/user');
const User = require('./models/user');
const shopRoutes = require('./routes/shop');

// Load environmental variables
dotenv.config({path: './util/config.env'});

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    User.findById('5e64bafe289f4b36006510d6')

        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});


// app.use(cors());
app.use(productRoute)
app.use(useRoutes)
// app.use(userClass)
app.use(shopRoutes)


// mongoConnect(() => {
//     app.listen(3000, function () {
//         console.log('server is running on 3000')
//     })
// });


// connect to a MongoDB database
console.log('process.env.MONGO_URL: ..............', process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT || 3000,function () {
        
    console.log('server is running on 3000')
    });
}).catch(err => console.error(err));
