// const express = require('express');
//const getDb = require('../util/DB').getDb;
//const ObjectID = require('mongodb').ObjectID;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        unique:true
    }
});

// userSchema.statics.findByEmail = (email)=>{
//     return this.findOne({email: email});
// }

//model name will be used to turn into collection name
//'User' -> lower case 'user' + 's'
module.exports = mongoose.model('User', userSchema);







/*class User {
    constructor(_id, email, password, cart) {
        this._id = _id,
            this.email = email,
            this.password = password,
            this.cart = cart

    }
    save() {
        const db = getDb();
        return db.collection('Users')
            .insertOne(this);
    }
    static findById(userId) {
        return new User(ObjectID('5e64bafe289f4b36006510d6'));
        // const db = getDb();
        // return db.collection('Users')
        //     .findOne({ _id: new ObjectID(userId) })
    }
}

module.exports = User;*/