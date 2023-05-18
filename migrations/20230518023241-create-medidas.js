'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      peso: {
        type: Sequelize.FLOAT
      },
      peito: {
        type: Sequelize.FLOAT
      },
      ombro: {
        type: Sequelize.FLOAT
      },
      cintura: {
        type: Sequelize.FLOAT
      },
      quadril: {
        type: Sequelize.FLOAT
      },
      bracoDireito: {
        type: Sequelize.FLOAT
      },
      bracoEsquerdo: {
        type: Sequelize.FLOAT
      },
      coxaDireita: {
        type: Sequelize.FLOAT
      },
      coxaEsquerda: {
        type: Sequelize.FLOAT
      },
      panturrilhaDireita: {
        type: Sequelize.FLOAT
      },
      panturrilhaEsquerda: {
        type: Sequelize.FLOAT
      },
      alunoId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'alunos',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade' 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Medidas');
  }
};