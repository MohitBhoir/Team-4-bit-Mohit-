require('dotenv').config()
const express = require('express');
const connectDB = require('./db/connect');
require('express-async-errors')
const app = express()
const cors=require('cors')
const notFound = require('./middleware/not-found')
const errohandlerMiddleware = require('./middleware/error-handler')
const auth=require('./middleware/authentication')
const mediRouter = require('./routes/medicine')
const authRouter = require('./routes/auth')
const historyRouter=require('./routes/history')


app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/medicines",mediRouter)
app.use("/api/v1/history", auth, historyRouter)



app.use(notFound)
app.use(errohandlerMiddleware)

const port = process.env.PORT || 8000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
