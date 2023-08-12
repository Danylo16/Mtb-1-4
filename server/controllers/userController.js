const ApiError = require('../error/ApiError')
const {User, Basket} = require('../models/models')

class UserController {
    async registration(req, res){
        
    }

    async login(req, res){

    }

    async delete(req, res){

    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('no id'))
        }
        res.json(id)
    }

}

module.exports = new UserController()