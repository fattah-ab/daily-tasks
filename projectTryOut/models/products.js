'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // products.hasMany(models.orderdetails)
      products.belongsToMany(models.orders, {through: 'models.orderdetails'})
    }
  };
  products.init({
    product_name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Product name must be filled! thanks."
        }
      }
    },
    product_price: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : {
          msg : "Product price must be filled! thanks."
        },
        isNumeric : {
          msg : "Price must be a number."
        }
      }
    },
    product_image: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Product image must be filled! thanks."
        },
        isUrl : {
          msg : "Product image must be URL format."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};