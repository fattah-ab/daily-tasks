const { movieChars, movies, characters } = require('../models')

class MoviecharController {
    static async getMovieChar (req, res, next) {
        try {
            const result = await movieChars.findAll({
                order : [
                    ['id', 'ASC']
                ],
                include : [
                    movies, characters
                ]
            })
            res.status(200).json(result);
            // console.log(result)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
            // console.log(err)
        }
    }
    static async addMovieChar (req, res, next) {
        const { movieId, characterId } = req.body;

        try {
                const char = await movieChars.create({
                    movieId, characterId
                })
                res.status(201).json(char)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
            
        }
    }
    static async findById (req, res, next) {
        const id = req.params.id;

        try {
            const result = await movieChars.findOne({
                where : { id }
            })
            res.status(200).json(result)
        } catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
    static async findByMovie(req, res, next) {
        const movieId = req.params.movie;
        try {
            const movie = await movies.findOne({
                where: { id: movieId }
            });
            const moviechars = await movieChars.findAll({
                where: { movieId },
                include: [characters]
            })
            let char = [];
            moviechars.forEach(moviechar => {
                char.push(moviechar.character)
            });
            res.status(200).json({
                "movies": movie,
                "characters": char
            });
        } catch (err) {
            next(err)
        }

    }
    static async updateMovieChar (req, res, next) {
        const id = req.userData.id;
        const { movieId, characterId } = req.body;

        try {
            const result = await movieChars.update({
                movieId, characterId
            }, {
                where: { id }
            });
            res.status(200).json(result);
        } catch (err) {
            next (err)
        }
    }
    static async deleteMovieChar(req, res, next) {
        const id = req.params.id

        try {
            const result = movieChars.destroy({
                where :{ id }
            })
            res.status(200).json({
                result,
                msg: "Movie Character deleted"
            })
        }catch (err) {
            // res.status(500).json(err)
            next(err)
        }
    }
}
module.exports = MoviecharController