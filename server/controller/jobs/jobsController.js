const Jobs = require('../../models/jobsmodel');
const mongoose = require("mongoose");
const User = require("../../models/usermodel");


class JobsController {
     async createJob (req,res){   
       let {profession,experience,salary,author,location, phone, social, img} = req.body;
        const newJob = new Jobs({
          _id: new mongoose.Types.ObjectId,         
          profession: profession,
          experience: experience,
          salary: salary,  
          author: author,
          location: location,
          phone: phone,
          social: social,
          img: img          
        })             
      await newJob.save();
      return res.json({newJob});
    }
   
    async getOneJob (req,res){
        const id = req.query.id;  
        console.log(id)   
        try{        
            const resume =  await Jobs.find({author: id})      
            return res.json({resume});
        } catch (error) {
            console.log(error);
            return res.json({})
        }
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

module.exports = new JobsController();