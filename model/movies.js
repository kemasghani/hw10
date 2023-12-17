const pool = require("../config/config")

class Movies {
    //function itu jadi method kalo didalem Class
    static getMovies = async (next) => {
        const findQuery = `SELECT * FROM movies`

        try {
            const data = await pool.query(findQuery)

            return data.rows
        } catch (err) {
            next(err)
        }
    }

    static getMoviesById = async (id, next) => {
        const query = `SELECT * FROM movies WHERE id = $1;` // $1 itu placeholder

        try {
            const data = await pool.query(query, [id])

            if (data.rows.length === 0) {
                return null
            }

            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static createMovies = async (moviesData, next) => {
        const { tittle, genres, year } = moviesData

        if (!tittle || !genres || !year) {
            return next({
                tittle, genres, year: "paramsError"
            })
        }

        const query = `INSERT INTO movies (tittle, genres, year) VALUES ($1, $2, $3, #4);`

        try {
            const data = await pool.query(query, [tittle, genres, year])

            return data.rows[0];
        } catch {
            next(err)
        }

    }

    static update = async (id, MoviesData, next) => {
        const {tittle, genres, year } = MoviesData

        if (!tittle || !genres || !year) {
            return next({
                name: "paramsError"
            })
        }

        const query = `
          UPDATE movies
          SET tittle = $1,
          genres = $2,
          year = $3,
          WHERE id = $4;
        `
        try {
            const data = await pool.query(query, [tittle, genres, year, id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }

    static delete = async (id, next) => {
        const query = `DELETE FROM movies WHERE id = $1;`

        try {
            const data = await pool.query(query, [id])
            return data.rows[0]
        } catch (err) {
            next(err)
        }
    }
};

module.exports = Movies;
