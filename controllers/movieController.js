const asyncHandler = require('express-async-handler')
const Movie = require('../models/movieModel')

const getMovies = asyncHandler(async (req, res) => {
    
    const movies = await Movie.find()
    if (!movies.length) {
        res.status(400)
        throw new Error('There are no movies regristed')
    }
    //res.status(200).json({ mensaje: 'All products' })
    res.status(200).json(movies)
}) 

const setMovie = asyncHandler(async (req, res) => {

    if (!req.body.title) {
        res.status(400)
        throw new Error('No info typed')
    }

    const movie = await Movie.create({
        adult: req.body.adult,
        backdrop_path: req.body.backdrop_path,
        genre_ids: req.body.genre_ids,
        id: req.body.id,
        original_language: req.body.original_language,
        original_title: req.body.original_title,
        overview: req.body.overview,
        popularity: req.body.popularity,
        poster_path: req.body.poster_path,
        release_date: req.body.release_date,
        title: req.body.title,
        video: req.body.video,
        vote_average: req.body.vote_average,
        vote_count: req.body.vote_count

    })
    
    res.status(201).json(movie)
}) 

const updateMovie = asyncHandler(async (req, res) => {

    const movie = await Movie.findById(req.params.id)

    if (!movie){
        res.status(400)
        throw new Error('Product not finded')
    }

    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateMovie)
}) 

const updateMovieLikes = asyncHandler(async (req, res) => {

    const movie = await Movie.findById(req.params.id)

    if (!movie){
        res.status(400)
        throw new Error('Product not finded')
    }

    

    const updatedMovieLike = await Movie.findByIdAndUpdate(req.params.id, req.body.vote_count+1, {new: true})

    res.status(200).json(updateMovieLikes)
}) 

const deleteMovie = asyncHandler(async (req, res) => {

    const delmovie = await Movie.findById(req.params.id)

    if (!delmovie){
        res.status(400)
        throw new Error('Movie not finded')
    }
    
    await delmovie.deleteOne() 
    res.status(200).json({ message: 'Movie deleted', deletedMovie: delmovie})
    //res.status(200).json({id: req.params.id})
}) 


module.exports = {
    getMovies,
    setMovie,
    updateMovie,
    updateMovieLikes,
    deleteMovie
}
