const ApiError = require("../apiError/errors")

module.exports = function(req,res,next){
    if(err instanceof ApiError){
      return res.status(err.status).json(err.message)
    }
    return res.status(500).json({message: `Error has been unique`})
}
