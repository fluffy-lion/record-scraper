const mongoose = require('mongoose')

const Schema = mongoose.Schema
const recordSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    release: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Record', recordSchema)