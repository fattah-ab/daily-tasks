const ReviewController = require('../controller/reviewController')
const { Router } = require('express')
const router = Router()
const { authentication, isAdmin } = require('../middlewares/auth')
const reviewController = require('../controller/reviewController')

//user post review after login
router.post('/add/:id',authentication,reviewController.addUserReview)

//display reviewed movies on user's profile
router.get('/profile',authentication,reviewController.getUserReview)

//display movie's review from user on movies page
router.get('/movie/:id',reviewController.getMovieReviews)

//edit review by user who posted the review
router.put('/edit/:id',authentication,reviewController.editMovieReview)

//delete review by user who posted the review
router.delete('/delete/:id',authentication,reviewController.deleteMovieReview)

module.exports = router