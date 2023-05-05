const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMw')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()
//console.log(`${process.env.PORT}`.random)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/movies', require('./routes/moviesRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/mymovies', require('./routes/mymoviesRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`.rainbow.bold))