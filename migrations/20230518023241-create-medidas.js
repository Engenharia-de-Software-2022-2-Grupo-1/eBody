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
        type: Sequelize.DATEONLY
      },
      peso: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      peito: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      ombro: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      cintura: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      quadril: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      bracoDireito: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      bracoEsquerdo: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      coxaDireita: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      coxaEsquerda: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      panturrilhaDireita: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      panturrilhaEsquerda: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      alunoId: {
        allowNull: false,
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