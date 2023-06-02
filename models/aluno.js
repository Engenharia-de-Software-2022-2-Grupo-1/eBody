'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Aluno extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			Aluno.hasMany(models.Medidas);
			Aluno.hasMany(models.Treino);
		}
	}
	Aluno.init({
		nome: DataTypes.STRING,
		dataNascimento: DataTypes.DATEONLY,
		telefone: DataTypes.STRING,
		cidade: DataTypes.STRING,
		bairro: DataTypes.STRING,
		dataPagamento: DataTypes.DATEONLY,
		adimplente: DataTypes.BOOLEAN,
		nomeContato1: DataTypes.STRING,
		numeroContato1: DataTypes.STRING,
		grauContato1: DataTypes.STRING,
		nomeContato2: DataTypes.STRING,
		numeroContato2: DataTypes.STRING,
		grauContato2: DataTypes.STRING 
	}, {
		sequelize,
		modelName: 'Aluno',
	});
	return Aluno;
};