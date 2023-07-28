require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 8080

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)



const start = async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log('Successful database connection');

        app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
    } catch (e) {
        console.error('Database connection failed:', e);
    }
}

start();
