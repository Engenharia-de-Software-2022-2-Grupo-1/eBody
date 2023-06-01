'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataNascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bairro: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataPagamento: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      adimplente: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      nomeContato1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numeroContato1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grauContato1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nomeContato2: {
        allowNull: false,
        type: Sequelize.STRING
      },
     numeroContato2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grauContato2: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Alunos');
  }
};