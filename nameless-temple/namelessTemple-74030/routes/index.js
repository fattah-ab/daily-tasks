const { Router } = require('express');
const router = Router();
const userRoutes = require('./user')
const movieRoutes = require('./movie');
const characterRoutes = require('./character');
const moviecharRoutes = require('./moviechar');
const reviewRoutes = require('./review');
const { upload } = require('../middlewares/multer')


const movieController = require('../controller/movieController')
const userController = require('../controller/userController')

router.get('/home/:page', movieController.getMovie)

router.post('/register',upload.single('image'), userController.register)
router.post('/login',userController.login)

router.post('/search',movieController.search)

router.use('/user', userRoutes)
router.use('/movie', movieRoutes)
router.use('/character', characterRoutes)
router.use('/review',reviewRoutes)
router.use('/moviechar',moviecharRoutes)

module.exports = router;