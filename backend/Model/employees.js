const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName:{
        type:String
    },
    lastName : {
        type: String
    },
    email: {
        type: String
    },
})

const userModels = new mongoose.model('users', usersSchema)

module.exports = userModels

