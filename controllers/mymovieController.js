const asyncHandler = require('express-async-handler')
const Mymovie = require('../models/mymoviesModel')
const Movie = require('../models/movieModel')


const getMymovies = asyncHandler(async (req, res) => {

    await Mymovie.find({ user: req.user.id })
        if (!mymovies.length) {
            res.status(400)
            throw new Error('There are no movies saved')
        }

            res.status(200).send(mymovies)

    })
    
    //.aggregate(mymovies, {_id: req.body.movie})
    //Movie.populate(mymovies, { path: 'movie' })
    



const saveMymovies = asyncHandler(async (req, res) => {
    //const User = require('../models/userModel')
    //const findmovie = await Movie.findOne({_id: req.body.movie})
    // .populate({ path: 'movie', model: 'Mymovie' })
    // .exec();

    const findmovie = await Movie.aggregate(
        [
            {
                $lookup: {
					from: 'movies',
					localField: 'movie',
					foreignField: '_id',
					as: 'movie'
				 }

            }
        ]
    )
        res.status(200).send(findmovie)

    
    //const userID = (req.user.id) Guarda el id del usuario por medio del token
    //console.log(`"${userID}"`)

    // import { ObjectId } from 'mongodb'
    // const objectId = new ObjectId('your-object-id-as-string')   
    

    //console.log(movieexist)
    // if (!{_id: req.body.movie}) {
    //     res.status(400)
    //     throw new Error('Movie doesnt exist')
    // } 

    // if (!req.body.texto) {
    //     //res.status(400).json({ mensaje: 'Favor de teclear la descripción de la pelicula' })
    //     res.status(400)
    //     throw new Error('Favor agregar un nombre para tu lista de peliculas')
    // }


    const addmovie = await Mymovie.create({
        
        //texto: req.body.texto,
        user: req.user.id,
        movie: findmovie,
    })

    res.status(201).json(addmovie)
})

const deleteMymovies = asyncHandler(async (req, res) => {

    const delmymovie = await Mymovie.findById(req.params.id)

    if (!delmymovie) {
        res.status(400)
        throw new Error('Movie not found')
    }

    //Verificamos que la pelicula pertenece al usuario del token
    if (delmymovie.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Unauthorized Access, movie doesnt belongs to logged user')
    }

    await delmymovie.deleteOne()

    //res.status(200).json({ id: req.params.id })
    res.status(200).json({ message: 'Product deleted', deletedProduct: delmymovie})
})


module.exports = {
    getMymovies,
    saveMymovies,
    deleteMymovies
}