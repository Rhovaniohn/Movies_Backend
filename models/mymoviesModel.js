const mongoose = require('mongoose')

const mymoviesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    texto: {
        type: String,
        required: [false, 'Enter your movie list name']
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Mymovie', mymoviesSchema)