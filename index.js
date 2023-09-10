const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const { connection } = require('./config/db')
const userRoutes = require('./routes/user.routes')
const flightRoutes = require('./routes/flight.routes')
const bookingRoutes = require('./routes/booking.routes')
const app = express()
app.use(express.json())

let PORT = process.env.PORT || 3030
// user routes
app.use("/api",userRoutes)

// flight routes
app.use("/api/flights",flightRoutes)

// booking routes
app.use("/api",bookingRoutes)

app.listen(PORT, async() => {
    try {
        await connection
        console.log(`Database is connected`)
    } catch (error) {
        console.log(error)
        console.log("Something went wrong")
    }
    console.log(`Server is listening at ${PORT}`)
})