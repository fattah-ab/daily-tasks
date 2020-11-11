'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      characters.belongsToMany(models.movies, 
        {through: 'models.movieChars'});  
    }
  };
  characters.init({
    name: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Name must be filled!"
          }
      }
    },
    image: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: {
              msg: "Image must be filled!"
          }
      }
    },
  }, {
    sequelize,
    modelName: 'characters',
  });
  return characters;
};