"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Beat extends Model {
		static associate(models) {
			Beat.belongsTo(models.Category, {
				as: "category",
				foreignKey: "categoryId",
			});
			Beat.belongsTo(models.User, {
				as: "producer",
				foreignKey: "producerId",
			});
			Beat.belongsTo(models.Licence, {
				as: "licence",
				foreignKey: "licenceId",
			});
		}
	}

	Beat.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			image: DataTypes.STRING,
			beat: DataTypes.STRING,
			price: DataTypes.INTEGER,
			like: DataTypes.INTEGER,
			categoryId: DataTypes.INTEGER,
			producerId: DataTypes.INTEGER,
			licenceId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Beat",
		}
	);

	return Beat;
};
