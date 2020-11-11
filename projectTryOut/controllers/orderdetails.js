const { orderdetails,products,orders } = require("../models");

class OrderDetailController {
    static async getOrderDetail(req, res) {
        try {
            const result = await orderdetails.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    orders,products
                ]
            })
            res.status(200).json(result);

        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static async addFormOrderDetails(req, res){
        const id = req.params.id;
        
        res.render('addOrderDetail.ejs');
    }

    static async addOrderDetail(req, res){
        const {orderId, productId, qty} = req.body;
        res.redirect('/')
        return orderdetails.create({
            orderId,
            productId,
            qty
        })
        
    }
}

module.exports = OrderDetailController;