const { Router } = require('express')
const router = Router()
const movieController = require('../controller/movieController')
const { authentication, isAdmin } = require('../middlewares/auth')
const { upload , multyUpload } = require('../middlewares/multer')


router.post('/add', authentication, isAdmin, upload.single('poster'), movieController.addMovie)
router.delete('/:id', authentication, isAdmin, movieController.deleteMovie)
router.put('/:id', authentication, isAdmin,upload.single('poster'), movieController.UpdateMovie)
router.put('/backdrop/:id', authentication, isAdmin,upload.single('backdrop'), movieController.addBackdrop)
router.get('/search/:id', movieController.findById)
router.get('/search', movieController.search)
router.get('/category', movieController.findCategory)

module.exports = router

