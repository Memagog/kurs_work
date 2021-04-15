const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [
        {
            type: String,
            default: "USER",
            ref: 'Roles'
        }
    ]    
})
const User = mongoose.model('User', UserModel);
module.exports = User;