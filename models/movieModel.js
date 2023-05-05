const mongoose = require('mongoose')

const movieShema = mongoose.Schema({
    adult: {
        type: Boolean,
        required: [true]
    },
    backdrop_path: {
        type: String,
        required: [false]
    },
    genre_ids: {
        type: [Number],
        required: [false]
    },
    id: {
        type: Number,
        required: [true]
    },
    original_language: {
        type: String,
        required: [true]
    },
    original_title: {
        type: String,
        required: [true]
    },
    overview: {
        type: String,
        required: [true]
    },
    popularity: {
        type: Number,
        required: [true]
    },
    poster_path: {
        type: String,
        required: [false]
    },
    release_date: {
        type: String,
        required: [true]
    },
    title: {
        type: String,
        required: [true]
    },
    video: {
        type: Boolean,
        required: [false]
    },
    vote_average: {
        type: Number,
        required: [true]
    },
    vote_count: {
        type: Number,
        required: [true]
    }
},{
    //timestamps:true,
    
})

module.exports = mongoose.model('Movie', movieShema)