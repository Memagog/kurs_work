const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:  String,
    description: String,    
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });;

const Event = mongoose.model('Events', eventSchema);
module.exports =  Event;
