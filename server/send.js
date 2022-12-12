require('dotenv').config()

const connectDB = require('./db/connect')
const Medicine= require('./models/medicine')

const jsonData = require('./data.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Medicine.deleteMany()
        await Medicine.create(jsonData)
        console.log("success")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()