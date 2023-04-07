const mongoose = require('mongoose')

const Schema = mongoose.Schema

const weatherSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    }
}, {timestamps: true })

module.exports = mongoose.model('weather', weatherSchema)