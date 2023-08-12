const uuid = require('uuid')
const fs = require('fs')
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');


class DeviceController {
    async create(req, res, next){
        try{
            const {name, price, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const device = await Device.create({name, price, img: fileName})
            
            if (info) {
                try {
                  const infoArray = JSON.parse(info);
                  infoArray.forEach(i =>
                    DeviceInfo.create({
                      title: i.title,
                      description: i.description,
                      deviceId: device.id
                    })
                  );
                } catch (error) {
                  console.error("Error while saving DeviceInfo:", error);
                }
              }
              

            return res.json(device)   
        }catch(err){
            next(ApiError.badRequest(err.message))
        }

    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }

    async getAll(req, res){
        const devices = await Device.findAll();
        return res.json(devices);
    }

    async getDefaultResultOrder(req, res){

    }

    async update(req, res){

    }

    async delete(req, res){
        const {id} = req.params


        const device = await Device.findByPk(id);
        if (!device) {
            return res.status(404).json({ error: 'Device not found' });
        }
        await device.destroy();

        const imagePath = path.resolve(__dirname, '..', 'static', device.img);
        if (fs.existsSync(imagePath)) {
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                } else {
                    console.log('Image has been deleted:', device.img);
                }
            });
        }
      
        return res.status(200).json({ message: 'Device has been deleted' })
    }
}

module.exports = new DeviceController()