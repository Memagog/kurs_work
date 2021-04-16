const jwt = require("jsonwebtoken");
const { secretOrKey } = require("../config/config");
module.exports = function(role){
    return function(req,res,next){
        if(req.method === "OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(401).json({message: "Пользователь не авторизован!"});
            }
            const decode = jwt.verify(token, secretOrKey);
            if(decode.roles != role){
                return res.status(403).json({message: `"You aren't a ADMIN!" + ${decode.roles}`});
            }
            req.user = decode;
            next()
        } catch (error) {
            return res.status(401).json({message: "Пользователь не авторизован!"});
        }
    }
}