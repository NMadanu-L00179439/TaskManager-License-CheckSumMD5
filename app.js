require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const crypto = require('crypto-js');

require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//middleware

app.use(express.static('./public'))
app.use(express.json())

//routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        const md5Checksum = crypto.MD5(process.env.MONGO_URI).toString();
        console.log('MONGO_URI (MD5 Checksum):', md5Checksum);
        app.listen(port, console.log(`Server is listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}
start()
//app.listen(port, console.log(`server is listening on port ${port}...`))