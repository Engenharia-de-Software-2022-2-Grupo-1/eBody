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
    }
  }
  Aluno.init({
    nome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    telefone: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    adimplente: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};