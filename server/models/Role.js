const mongoose = require("mongoose");

const RolesModel = mongoose.Schema({    
    value: {type: String, default: "USER"}
})
const Roles = mongoose.model('User', RolesModel);
module.exports = Roles;