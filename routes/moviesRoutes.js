const express = require('express')
const router = express.Router()
const { getMovies,setMovie,updateMovie,updateMovieLikes,deleteMovie } = require('../controllers/movieController')

router.route('/').get(getMovies).post(setMovie)
//router.get('/', getTareas)
//router.post('/', setTareas)

router.route('/:id').put(updateMovie).delete(deleteMovie)
router.put('/likemovie/:id', updateMovieLikes)
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router
