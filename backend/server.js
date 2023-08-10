require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
// app.use routes

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})