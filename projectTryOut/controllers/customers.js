const { customers } = require("../models");

class customerController {
	static async getCustomer(req, res) {
		try {
			const result = await customers.findAll({
				order: [["id", "ASC"]],
			});
			res.render("customers.ejs", { customer: result });
			// res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static addFormCustomer(req, res) {
		res.render("addCustomer.ejs");
	}

	static addCustomer(req, res) {
		const { customer_name, password } = req.body;

		customers
			.findOne({
				where: {
					customer_name,
				},
			})
			.then((found) => {
				if (found) {
					res.send("Insert your name, please!");
				} else {
					return customers.create({
						customer_name,
						password,
					});
				}
			})
			.then((result) => {
				// res.send(result);
				res.redirect("/customers");
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static findById(req, res) {
		const id = req.params.id;
		customers
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

	static async login(req, res) {
		const { customer_name, password } = req.body;
		try {
			const result = await customers.findOne({
				where: { customer_name, password },
			});
			if (result) {
				res.redirect('/');
                res.status(200).json(result);
                
			} else {
				res.send("Not found!");
				res.status(404).json(result);
			}
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static deleteCustomer(req, res) {
		const id = req.params.id;
		customers
			.destroy({
				where: { id },
			})
			.then(() => {
				// res.send("Deleted")
				res.redirect("/customers");
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static editFormCustomer(req, res) {
		const id = req.params.id;
		// console.log(id)
		customers
			.findOne({
				where: { id },
			})
			.then((result) => {
				console.log(result);
				res.render("editCustomer.ejs", { customer: result });
			})
			.catch((err) => {
				res.send(err);
			});
	}

	static async register(req, res) {
		const { customer_name, password } = req.body;
		try {
			const user = await User.create({
				customer_name,
				password,
			});
			res.status(201).json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	static editCustomer(req, res) {
		const id = req.params.id;
		const { customer_name, password } = req.body;
		customers
			.update(
				{
					customer_name,
					password,
				},
				{
					where: { id },
				}
			)
			.then((result) => {
				if (result[0] === 1) {
					res.redirect("/customers");
				} else {
					res.send("Almost there, but not completed!");
				}
				// res.send(result)
			})
			.catch((err) => {
				res.send(err);
			});
	}
}
module.exports = customerController;
