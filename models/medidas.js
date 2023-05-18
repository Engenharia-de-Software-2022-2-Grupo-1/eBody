'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medidas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Medidas.belongsTo(models.Aluno);
    }
  }
  Medidas.init({
    data: DataTypes.DATEONLY,
    peso: DataTypes.FLOAT,
    peito: DataTypes.FLOAT,
    ombro: DataTypes.FLOAT,
    cintura: DataTypes.FLOAT,
    quadril: DataTypes.FLOAT,
    bracoDireito: DataTypes.FLOAT,
    bracoEsquerdo: DataTypes.FLOAT,
    coxaDireita: DataTypes.FLOAT,
    coxaEsquerda: DataTypes.FLOAT,
    panturrilhaDireita: DataTypes.FLOAT,
    panturrilhaEsquerda: DataTypes.FLOAT,
    alunoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medidas',
  });
  return Medidas;
};