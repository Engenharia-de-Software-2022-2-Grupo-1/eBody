/* eslint-disable */
const request = require('supertest');
const { app, closeServer } = require('../../server');
const { Aluno, Treino, Exercicio } = require('../../models');


describe('Testes do endpoint POST /aluno/:id/treino', () => {
    it('Deve cadastrar o treino do aluno com sucesso', async () => {
        const alunoId = 3;
        const treino = {
            nome: 'Treino A',
            exercicios: [
                { nome: 'Agachamento', repeticoes: 10, series: 3 },
                { nome: 'Supino', repeticoes: 8, series: 4 },
            ],
        };

        const response = await request(app).post(`/aluno/${alunoId}/treino`).send(treino);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Treino do aluno cadastrado com sucesso' });
    });
});



closeServer();