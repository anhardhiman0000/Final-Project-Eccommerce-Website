const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const card = new Schema({
    name: {
        type: String
    },
    imgUrl: {
        type: String
    },
})
var cards = mongoose.model('MessageCard', card);
module.exports = cards