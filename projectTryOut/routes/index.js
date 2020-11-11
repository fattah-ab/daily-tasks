const { Router } = require("express");
const router = Router();
const ProductRoutes = require("./product");
const customersRoutes = require("./customers");
const OrderRoutes = require("./order")
const OrderDetailRoutes = require("./orderdetail");

const customerController = require("../controllers/customers");
const ProductController = require("../controllers/Product");
const { products } = require("../models");

router.get("/", ProductController.getAllProduct);

router.get("/login", (req, res) => {
	res.render("login.ejs");
});

router.get("/test", (req, res) => {
	res.render("addOrder.ejs");
});

// router.post("/addtocart/:id", (req, res) => {
// 	const id = req.params.id;
// 	products
// 		.findOne({
// 			where: {
// 				id,
// 			},
// 		})
// 		.then((product) => {
// 			res.send(product);
// 		})
// 		.catch((err) => res.send(err));
// });


router.post("/login", customerController.login);
router.use("/orders",OrderRoutes);
router.use("/products", ProductRoutes);
router.use("/customers", customersRoutes);
router.use("/orderdetails",OrderDetailRoutes);

module.exports = router;
