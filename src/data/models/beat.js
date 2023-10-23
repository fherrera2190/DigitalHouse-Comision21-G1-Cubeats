'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Beat.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    beat: DataTypes.STRING,
    price: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    producerId: DataTypes.INTEGER,
    licenceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Beat',
  });
  return Beat;
};