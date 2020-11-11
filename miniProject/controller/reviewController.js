const { users,movies,reviews } = require('../models')

class reviewController {
    static async addUserReview(req,res,next){
        const movieId = parseInt(req.params.id)
        const userId = parseInt(req.userData.id)
        const comment = req.body.comment
        const rate = parseInt(req.body.rate)
        const user = req.userData
        try {
            // cek apakah movie exist
            const exist = await movies.findOne({
                where: {
                    id: movieId
                }
            })
            // jika ada, cek dulu apakah user sudah pernah comment
            if (exist) {
                const result = await reviews.findOne({
                    where: {
                        movieId : movieId,
                        userId : userId
                    }
                })
                // jika ada, maka tolak
                if (result) {
                    res.status(403).json({
                        msg : "you already reviewed the movie"
                    })
                    console.log(result);
                // jika tidak ada data, maka buat data baru
                } else {
                    const create = await reviews.create({
                        userId,
                        movieId,
                        comment,
                        rate
                    })
                    res.status(200).json(create)    
                }
            } else {
                res.status(404).json({
                    ERROR : 'Movie not found'
                })
            }
        }
        catch (err) {
            console.log(err);
            next(err);
        }
    }
    // Display reviewed movie on user's profile page
    static async getUserReview (req, res, next){
        const userId = req.userData.id
        try {
            const found = await reviews.findAll({
                where: 
                {
                    userId : userId
                },
                include : [
                    movies
                ]
            })
            if (found) {
                res.status(200).json({
                    review: found,
                })
            } 
            else {
                res.status(404).json({
                    msg : 'Not found'
                })
            }
        }
        catch (err) {
            next(err)
        }
    }
   // Display user's review on movie side
   static async getMovieReviews (req, res, next){
       const movieId = req.params.id

       try {
           const movieExist = await movies.findOne({
               where: {
                   id: movieId
               }
           })
           if (movieExist) {
            const comments = await reviews.findAll({
                where: {
                    movieId: movieId
                },
                include: [
                    users,movies
                 ]
            })
            res.status(200).json(comments)
           } else {
               res.status(200).json({
                   msg :"this movie was not reviewed yet",
                   movie : movieExist
               })
           }
       } catch (error) {
           next(error)           
       }
   }
   //Edit Review
   static async editMovieReview (req, res, next) {
        const id = req.userData.id
        const movieid = req.params.id
        const { review, rate } = req.body

       try {
           const comments = await reviews.findOne({
               where: {
                   userId: id,
                   id : movieid          
            }
           })
           if (comments) {
               const update = await reviews.update({
                    review, rate },
                    {
                    where: {
                        id : movieid
                    }
                })
                res.status(200).json({
                    msg : 'Review Updated',
                    update : update})
            } else {
                res.status(404).json({
                    msg : 'Invalid Operation'
                })
            }
       } catch (error) {
           next(error)
           
       }

   }
   //Delete Reviews
   static async deleteMovieReview(req, res, next) {
       const userId = req.userData.id
       const movieId = req.params.id

       try {
           const found = await reviews.findOne({
               where: {
                   userId : userId,
                   movieId : movieId
               }
           })
           if (!found){
               res.status(403).json({
                   msg : "forbidden operation"
               })
           } else {
               const deleteReviews = await reviews.destroy({
                   where: {
                       movieId : movieId
                   }
               })
               res.status(204).json({
                   msg : "review deleted successfully"
               })
           }
       } catch (error) {
           next(error)
       }
   }
}
module.exports = reviewController