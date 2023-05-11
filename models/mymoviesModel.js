const mongoose = require('mongoose')
const Movie = mongoose.model('Movie');

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
        autopopulate: true,
        required: true
    }
}, {
    timestamps: true
})

mymoviesSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Mymovie', mymoviesSchema)