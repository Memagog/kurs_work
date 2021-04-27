const { query } = require("express");
const ApiError = require("../../apiError/errors");
const User = require('../../models/usermodel');
const mongoose = require("mongoose");
const Event = require("../../models/eventmodel");
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require("../../config/config");
const generateJwt = (payload) => {
    return jwt.sign(payload, secretOrKey, {expiresIn:"24h"});
}
class UserController {    
    async registration(req,res){       
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.json({message: "error"})
            }
            const {username, email, password, roles} = req.body;
            await User.findOne({email: email}).then((user)=>{
                if(user){
                    return res.status(400).json({message: "Пользователь с таким эмейлом уже существует"})
                }
                else {
                    const hashPassword = bcrypt.hashSync(password,7);
                    const newUser = new User({
                        _id: new mongoose.Types.ObjectId,
                        name: username,
                        email: email,
                        password: hashPassword,            
                        roles: roles,
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
    async login (req,res, next){
            try {
                const {email,password} = req.body;
                await User.findOne({email: email}).then((user)=>{
                    if(!user){
                        return next(ApiError.internal(`Пользователь с таким эмейлом не найден ${req.email}`))
                    }
                   bcrypt.compare(password, user.password).then((isValid)=>{
                        if(!isValid){
                            return res.status(400).json({message:"Введен неверный пароль"});
                        }
                        else{
                            const payload = {
                                id: user.id,
                                email: user.email,
                                password: user.password,
                                roles: user.roles,
                            }
                            
                            const token =generateJwt(payload);
                            return res.json({token});
                        }                        
                    })
                      
                    
                })
                
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
        const payload = {
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
            roles: req.body.roles,
        }
      const token = generateJwt(payload);
      return res.json({token});
    }
}

module.exports = new UserController();