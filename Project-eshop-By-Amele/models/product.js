
// const getDb = require('../util/DB').getDb;
// const ObjectID = require('mongodb').ObjectID


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    imageUrl: String
});

//model name will be used to turn into collection name
//'Product' -> lower case 'product' + 's'
module.exports = mongoose.model('Product', productSchema);



// class Product {
//     constructor(id, title, imageUrl, price, description) {
//         this._id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.price = price;
//         this.description = description;
//     }

//     save() {
//         const db = getDb();
//         db.collection('products')
//             .insertOne(this)
//             .then(result => console.log(result))
//             .catch(err => console.log(err));
//     }

//     static findAll() {
//         const db = getDb();
//         return db.collection('products')
//             .find()
//             .toArray()

//     }

//     static findById(prodId) {
//         const db = getDb();
//         return db.collection('products')
//             .findOne({ _id: new ObjectID(prodId) });
//     }

//     update() {
//         const db = getDb();
//         return db.collection('products')
//             .updateOne({ _id: new ObjectID(this._id) }, {
//                 $set: {
//                     title: this.title,
//                     price: this.price,
//                     imageUrl: this.imageUrl,
//                     discription: this.description
//                 }
//             })

//     }

//     static deleteById(prodId) {
//         const db = getDb();
//         return db.collection('products')
//             .remove({ _id: new ObjectID(prodId) })
//     }
// }

