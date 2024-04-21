const mongoose = require('mongoose')

const connectionString = ''

const connectDB = (url) => {
    return mongoose
            .connect(url, {
                ssl: true,
            })
}

module.exports = connectDB;

