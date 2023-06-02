'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Treino extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Treino.belongsTo(models.Aluno);
			Treino.hasMany(models.Exercicio);
		}
	}
	Treino.init({
		nome: DataTypes.STRING,
		alunoId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Treino',
	});
	return Treino;
};