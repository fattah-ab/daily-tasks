const { products } = require("../models");

class ProductController {
	static async getProduct(req, res) {
		try {
			const result = await products.findAll({
				order: [["id", "ASC"]],
            });
			res.render("product.ejs", { products: result });
			// res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	}

	static async getAllProduct(req, res) {
		try {
			const result = await products.findAll({
				order: [["id", "ASC"]],
			});
			res.render("index.ejs", { products: result });
			// res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	}

	static addFormProduct(req, res) {
		res.render("addProducts.ejs");
	}

	static async addProduct(req, res) {
		const { product_name, product_price, product_image } = req.body;
		try {
			const found = await products.findOne({
				where: {
					product_name,
				},
			});
			if (found) {
				res.send("Name already exist! Try another name arigato.");
			} else {
				const product = await products.create({
					product_name,
					product_price,
					product_image,
				});

				// res.send("add succes")
				// res.status(200).json(product)
				res.redirect("/products");
			}
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
		// Product.findOne({
		//     where : {
		//         name
		//     }
		// })
		// .then(found => {
		//     if(found){
		//         res.send("Name already exist! Try another name arigato.")
		//     }else {
		//         return Product.create({
		//             name,
		//             status,
		//             bounty,
		//             ShipId
		//         })
		//     }
		// })
		// .then(result => {
		//     // res.send(result);
		//     res.redirect('/Products')
		// })
		// .catch(err => {
		//     res.send(err)
		// })
	}

	static findById(req, res) {
		const id = req.params.id;
		products
			.findOne({
				where: { id },
			})
			.then((result) => {
				res.send(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static deleteProduct(req, res) {
		const id = req.params.id;
		products
			.destroy({
				where: { id },
			})
			.then(() => {
				// res.send("Deleted")
				res.redirect("/products");
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editFormProduct(req, res) {
		const id = req.params.id;
		// console.log(id)
		products
			.findOne({
				where: { id },
			})
			.then((result) => {
				console.log(result);
				res.render("editProducts.ejs", { products: result });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editProduct(req, res) {
		const id = req.params.id;
		const { product_name, product_price, product_image } = req.body;
		products
			.update(
				{
					product_name,
					product_price,
					product_image,
				},
				{
					where: { id },
				}
			)
			.then((result) => {
				if (result[0] === 1) {
					// res.send(result)
					res.redirect("/products");
				} else {
					res.send("Update not done!");
				}
				// res.send(result)
			})
			.catch((err) => {
				res.send(err);
			});
	}
}

module.exports = ProductController;
