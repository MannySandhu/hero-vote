const express = require('express')
const mongoose = require('mongoose')
const cardRoute = require('./route/card.route.js')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/cards", cardRoute);

mongoose.connect("mongodb+srv://mannys123:RFfbYm7IovMsqI0C@backenddb.ixgef.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to DB.')
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        })

    })
    .catch(() => {
        console.log('Connection failed.')
    })