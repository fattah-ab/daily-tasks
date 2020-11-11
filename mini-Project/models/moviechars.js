'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieChars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movieChars.belongsTo(models.movies)
      movieChars.belongsTo(models.characters)
    }
  };
  movieChars.init({
    movieId: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: {
              msg: "Movie Id must be filled!"
          }
      }
  },
    characterId: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: {
              msg: "Character Id must be filled!"
          }
      }
  }
  }, {
    sequelize,
    modelName: 'movieChars',
  });
  return movieChars;
};