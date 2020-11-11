const { Router } = require('express');
const router = Router();
const OrderController = require('../controllers/orders');

router.get("/",OrderController.getOrder);
router.get('/add', OrderController.addFormOrder);
router.post('/add', OrderController.addOrder);
router.get('/delete/:id', OrderController.deleteOrder);

module.exports = router;