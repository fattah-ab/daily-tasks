'use strict';
const {encryptPwd} = require('../helpers/bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.movies, {through: 'reviews'})
      // define association here
    }
  };
  users.init({
    fullname:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Password must be filled"
        }
      }
    },
    username:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Password must be filled"
        }
      }
    }, 
 
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail : { 
          msg : "Email must be provided"
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue: "User"
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : { 
          msg : "Password must be provided"
        }
      }
    },
    image: {
      type : DataTypes.STRING,
      defaultValue : "public/defaultprofile.png"
    },
  }, 
  {
    hooks: {
      beforeBulkUpdate(users){
        users.attributes.password = encryptPwd(users.attributes.password)
      },
      beforeCreate(users){
        users.password = encryptPwd(users.password)
      }
    },
    sequelize,
    modelName: 'users',
  });
  return users;
};