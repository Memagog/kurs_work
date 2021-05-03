const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:  String,
    description: String,
    price: String,
    profession: String,
    location: String,
    people: String,  
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    phone: String,
    social: String,
    img: String

  });;

const Event = mongoose.model('Events', eventSchema);
module.exports =  Event;
