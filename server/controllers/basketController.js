const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const { Basket, BasketDevice } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController{
    async addToBasket(req, res, next) {
        try{
            const { userId, deviceId } = req.body;
  
        }catch(e){
            console.log(e.message)
        }
    }
}