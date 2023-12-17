const Movies = require("../model/movies");

class MoviesRepository {

    static all = async (next) => {
        try {
            const data = await Movies.getMovies(next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MoviesRepository;