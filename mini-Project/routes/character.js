const { Router } = require('express')
const router = Router()
const characterController = require('../controller/characterController')
const { authentication, isAdmin } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router.get('/all', authentication, isAdmin, characterController.getChar)
router.post('/add', authentication, isAdmin, upload.single('image'), characterController.addChar)
router.get('/:id', authentication, isAdmin, characterController.findById)
router.put('/edit/:id', authentication, isAdmin, upload.single('image'), characterController.updateChar)
router.delete('/delete/:id', authentication, isAdmin, characterController.deleteChar)


module.exports = router
