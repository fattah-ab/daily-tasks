"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class customers extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			customers.hasMany(models.orders);
		}
	}
	customers.init(
		{
			customer_name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "Kindly filled the customer_name,please!",
					},
					isEmail: {
						msg: "please fill with the emal format.",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "Kindly filled the password, thank you!",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "customers",
		}
	);
	return customers;
};
