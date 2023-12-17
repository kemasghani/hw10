const MoviesRepository = require("../repositories/moviesRepository");

class MoviesService {
    static get_all_movies = async (next) => {

        try {
            const data = MoviesRepository.all(next);
            return data;
        } catch {
            next(err)
        }
    }
}

module.exports = MoviesService;