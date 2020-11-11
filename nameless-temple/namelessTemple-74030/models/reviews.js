'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      reviews.belongsTo(models.users)
      reviews.belongsTo(models.movies)
    }
  };
  reviews.init({
    movieId: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: {
              msg: " must be filled!"
          }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: {
              msg: " must be filled!"
          }
      }
    },
    comment: {
      type :DataTypes.TEXT,
      // validate : {
      //   notEmpty: { 
      //     msg : " must be filled!"
      //   }
      // }
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: {
              msg: " must be filled!"
          }
      }
    }
  }, {
    sequelize,
    model: 'reviews',
  });
  return reviews;
};