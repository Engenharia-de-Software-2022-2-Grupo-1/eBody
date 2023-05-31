'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Exercicio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Exercicio.hasMany(models.Exercicio, { as: 'conjugado', foreignKey: 'conjugadoId' });
            Exercicio.belongsTo(models.Exercicio, { as: 'exercicioPrincipal', foreignKey: 'exercicioId' });
            Exercicio.belongsTo(models.Treino);
        }
    }
    Exercicio.init({
        nome: DataTypes.STRING,
        repeticoes: DataTypes.INTEGER,
        series: DataTypes.INTEGER,
        conjugadoId: DataTypes.INTEGER,
        treinoId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Exercicio',
    });
    return Exercicio;


};