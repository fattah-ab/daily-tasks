const { Router } = require('express')
const router = Router()
const moviecharController = require('../controller/moviecharController')
const { authentication, isAdmin } = require('../middlewares/auth')

router.get('/all', authentication, isAdmin, moviecharController.getMovieChar)
router.post('/add', authentication, isAdmin, moviecharController.addMovieChar)
router.get('/:id', authentication, isAdmin, moviecharController.findById)
router.put('/edit/:id', authentication, isAdmin, moviecharController.updateMovieChar)
router.delete('/delete/:id', authentication, isAdmin, moviecharController.deleteMovieChar)
router.get('/find/:movie', authentication, moviecharController.findByMovie)

module.exports = router