const mongoose = require('mongoose');
const jobsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profession:  String,
    experience : String,
    salary: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    location:  String,        
    phone: String,
    social: String,
    img: String,
  });;

const Jobs = mongoose.model('Jobs',jobsSchema);
module.exports = Jobs;