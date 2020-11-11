'use strict';

const sequelizePaginate = require('sequelize-paginate')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        movies.belongsToMany(models.users, 
            {through: 'reviews'});  
        movies.belongsToMany(models.characters, 
            {through: 'models.movieChars'});
 }
  };
  movies.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Title must be filled! thanks."
        }
      }
    },
    synopsis: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty : {
          msg : "Synopsis must be filled! thanks."
        }
      }
    },
    trailer:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "trailer must be filled! thanks."
        }
      }
    },
    poster: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Poster must be filled! thanks."
        }
      }
    },
    backdrop: {
      type : DataTypes.STRING,
      // validate : {
      //   notEmpty : {
      //     msg : "Poster must be filled! thanks."
      //   }
      // }
    },
    category: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Category must be filled! thanks."
        }
      }
    },
    release_date: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "release_date must be filled! thanks."
        }
      }
    },
    director: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Director must be filled! thanks."
        }
      }
    },
    featured_song: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Featured song must be filled! thanks."
        }
      }
    },
    budget: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Budget must be filled! thanks."
        }
      }
    },
    rating: {
      type : DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'movies',
    
  });
  sequelizePaginate.paginate(movies)
  return movies;
};