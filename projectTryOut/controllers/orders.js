const { customers } = require("../models");
const { products } = require("../models");
const { orders } = require("../models");

class OrderController {
	static async getOrder(req, res) {
		try {
			const result = await orders.findAll({
				order: [["id", "ASC"]],
            });
			res.render("orders.ejs", { orders: result });
			// res.status(200).json(result);
		} catch (err) {
			res.status(500).json(err);
			console.log(err);
		}
	}
    
    static addFormOrder(req, res) {
		res.render("addOrder.ejs");
    }

    static async addOrder(req, res) {
        const {order_date,customerId} = req.body;
        const id = customerId;

        customers.findOne({
            where: {id}
        })
        .then(found =>{
            if(found){
                orders.create({
                    order_date,customerId
                })
                .then(result => {
                    res.redirect('/orders')
                })
            }else{
                res.send('No customer found')
            }
        })
        .catch((err) => {
            res.send(err);
        })
    }

    static async deleteOrder(req, res){
        const id = req.params.id;
        orders.destroy({
            where: {id}
        })
        .then(() => {
            res.redirect('/orders');
        })
        .catch((err) => {
            res.send(err);
        })
    }
}

module.exports = OrderController;