const { Router } = require('express');
const router = Router();
const userController = require('../controller/userController')
const { authentication, isAdmin } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')


router.get('/list',authentication,isAdmin, userController.userList)
router.get('/id',authentication,userController.getUserById)
router.put('/update',authentication,upload.single('image'),userController.updateProfile)

module.exports = router  