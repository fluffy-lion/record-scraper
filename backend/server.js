require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const recordRoutes = require('./routes/recordRoutes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/record-scraper', recordRoutes)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}, connected to db`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// process.env