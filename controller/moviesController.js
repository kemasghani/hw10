const Movies = require("../model/movies")
const MoviesService = require("../services/moviesService")

class MoviesController {
    static index = async (req, res, next) => {

        try {
            const data = await MoviesService.get_all_movies(next)
            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static show = async (req, res, next) => {
        const id = req.params.id
        try {
            const data = await Movies.getMoviesById(id, next)

            if (!data) {
                next({ name: "notFound" })
            } else {
                res.status(200).json(data)
            }
        } catch (err) {
            next(err)
        }
    }

    static create = async (req, res, next) => {
        const moviesData = req.body

        try {
            const data = await Movies.createMovies(moviesData, next)
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static update = async (req, res, next) => {
        const id = req.params.id
        const moviesData = req.body

        try {
            const data = await Movies.update(id, moviesData, next)

            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static delete = async (req, res, next) => {
        const id = req.params.id
        try {
            const data = await Movies.delete(id, next)
            res.status(200).json({ message: "Movies deleted" })
        } catch (err) {
            next(err)
        }
    }

}M
module.exports = MoviesController;