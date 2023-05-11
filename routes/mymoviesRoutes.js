const express = require('express')
const router = express.Router()
const { getMymovies,saveMymovies,updateMymovies,deleteMymovies } = require('../controllers/mymovieController')
const { protect } = require('../middleware/authMw')

router.route('/').get(protect, getMymovies).post(protect, saveMymovies)

//router.get('/mymovies', protect, getMymovies)
//router.post('/', setTareas)

router.route('/:id').delete(protect, deleteMymovies)
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router