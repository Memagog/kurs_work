const { query } = require("express");
const ApiError = require("../../apiError/errors");
const User = require('../../models/usermodel');
const mongoose = require("mongoose");
const Event = require("../../models/eventmodel");
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
class UserController {    
    async registration(req,res){       
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.json({message: "error"})
            }
            const {name, email, password, role} = req.body;
            await User.findOne({email: email}).then((user)=>{
                if(user){
                    return res.status(400).json({message: "Пользователь с таким эмейлом уже существует"})
                }
                else {
                    const hashPassword = bcrypt.hashSync(password,7);
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        name: name,
                        email: email,
                        password: hashPassword,            
                        role: role,
                    });
                    newUser.save();
                    return res.json({message: " Пользователь зарегистрирован!"})
                }
            })           
           
        } catch (error) {
            ApiError.badRequest(400);
            console.log(error);
        } 
      
    }
    async login (req,res){
            try {
                
            } catch (error) {
                console.log(error);
            }
    }
    async getAllUsers(req,res){
        try {
            const myevents = await Event.find({author: req.body.author})        
            return res.json({myevents});
        } catch (error) {
            console.log(error);
        }
        
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