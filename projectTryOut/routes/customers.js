const { Router } = require('express');
const router = Router();
const customerController = require('../controllers/customers')

router.get('/', customerController.getCustomer);
router.get('/add', customerController.addFormCustomer)
router.post('/add', customerController.addCustomer)
router.get('/delete/:id', customerController.deleteCustomer)
router.get('/edit/:id', customerController.editFormCustomer)
router.post('/edit/:id', customerController.editCustomer)
router.get('/:id', customerController.findById)

module.exports = router;
