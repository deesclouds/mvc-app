const mongoose = require('mongoose')
// this is our schema
const itemListSchema = new mongoose.Schema({
    // text input from our form
    textinput: {
        type: String,
        required: true
    },
    // number input from our form
    numinput: {
        type: Number,
        required: true
    },
    // submit default date for when the data was passed to database
    date: {
        type: Date, 
        default: Date.now

    }
})

// export our schema to our mongoose model
module.exports = mongoose.model('ItemList', itemListSchema, 'items')
