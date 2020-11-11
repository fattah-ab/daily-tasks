const { Router } = require('express');
const router = Router();
const userController = require('../controller/userController')
const { authentication, isAdmin } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')


router.get('/',authentication,isAdmin, userController.userList)
router.get('/id/:id',userController.getUserById)
router.put('/update',upload.single('image'),authentication,userController.updateProfile)

module.exports = router 