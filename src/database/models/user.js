"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        as: "orders",
        foreignKey: "userId"
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      cover: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "User"
    }
  );
  return User;
};
