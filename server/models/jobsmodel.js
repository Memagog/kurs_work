const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profession:  String,
    skills: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });;

module.exports = mongoose.model('Events', eventSchema);