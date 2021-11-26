const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
})
var users = mongoose.model('users',user);
module.exports = users
