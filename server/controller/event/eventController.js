const Event = require("../../models/eventmodel");
const mongoose = require("mongoose");
const User = require("../../models/usermodel");
const { create } = require("../../models/eventmodel");


class EventController {
     async crateEvent (req,res){   
       let {title,description,price,profession,location,people,author,phone,social,img} = req.body;
        const newEvent = new Event({
          _id: new mongoose.Types.ObjectId,
          title: title,
          description: description,
          price: price,
          profession: profession,
          location: location,
          people: people,  
          author: author,
          phone: phone,
          social: social,
          img: img   
        })
      
        
      await newEvent.save();
      return res.json({newEvent});
      
    }
    async getEvent (req,res){
        const eventList =  await Event.find();
        return res.json({eventList});
    }
    async getOneEvent (req,res){
        const id = req.query.id;  
        console.log(id)           
        const event =  await Event.findById(id)      
        
        return res.json(event)        
        
    }
    async checkName (req,res){
      const id = req.query.id;     
      const event =  await Event.findById(id)  
      const author_id = event.author;
      // console.log(author_id)
      const author = await User.findById(author_id)
     
     return res.json(author)   
    }
    
}

module.exports = new EventController();