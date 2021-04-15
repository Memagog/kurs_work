const Event = require("../../models/eventmodel");
const mongoose = require("mongoose");
const User = require("../../models/usermodel");
const { create } = require("../../models/eventmodel");

class EventController {
    async crateEvent (req,res){   
       let {title,description,author} = req.body;
      const newEvent = new Event({
        _id: new mongoose.Types.ObjectId,
        title: title,
        description: description,
        author: author   
      })
      
        
      await newEvent.save();
      return res.json({newEvent});
      
    }
    async getEvent (req,res){
        const eventList =  await Event.find();
        return res.json({eventList});
    }
    async getOneEvent (req,res){
      const id = req.body.id;
      //  const event =  await Event.findById(id,(error)=>{
      //     console.log(error);
      //   })
        return res.json(id)
      

    }
}

module.exports = new EventController();