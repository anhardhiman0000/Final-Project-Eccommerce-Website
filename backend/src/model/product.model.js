const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const product = new Schema({
    productname: {
        type: String
    },

    price: {
        type: Number
    },

    description: {
        type: String
    },

    imgUrl: {
        type: String
    }
});

let products = mongoose.model('products', product);
module.exports = products
