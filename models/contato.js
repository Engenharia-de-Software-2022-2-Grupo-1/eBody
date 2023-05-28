'use strict';
const {
   Sequelize, Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contato.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Marca a coluna 'id' como chave primária
      autoIncrement: false // Define a coluna 'id' para autoincremento
    },
    nome: DataTypes.STRING,
    numero: DataTypes.STRING,
    grauProximidade: DataTypes.STRING,
    alunoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contato',
  });

  return Contato;
};