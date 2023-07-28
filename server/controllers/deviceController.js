const uuid = require('uuid')
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');


class DeviceController {
    async create(req, res){
        const {name} = req.body
    }

    async getOne(req, res){

    }

    async getAll(req, res){
        
    }

    async getDefaultResultOrder(req, res){

    }

    async update(req, res){

    }

    async delete(req, res){

    }
}

module.exports = new DeviceController()