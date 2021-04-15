const { query } = require("express");
const ApiError = require("../../apiError/errors");
const User = require('../../models/usermodel');
const mongoose = require("mongoose");
const Event = require("../../models/eventmodel");
class UserController {
    async registration(req,res){       
        const newUser = new User({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,            
            events: req.body.events
        });
        await newUser.save();        
        return res.json({newUser});
    }
    async login (req,res){

    }
    async getAllUsers(req,res){
        const myevents = await Event.find({author: req.body.author})        
        return res.json({myevents});
    }
    async auth (req,res,next){
        // const {id} = req.query
        // if(!id){
        //    return next(ApiError.badRequest(`Id is Empty`))
        // }
        // res.json(id)
    }
}

module.exports = new UserController();