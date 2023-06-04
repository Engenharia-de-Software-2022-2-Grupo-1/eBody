/* eslint-disable */
const request = require('supertest');
const { app, closeServer } = require('../../server');
const { Aluno, Treino, Exercicio } = require('../../models');

const { limparBaseDeDados } = require('../cleanUp');

beforeAll(async () => {
    await limparBaseDeDados();
});

beforeEach(async () => {
    const alunos = [
        {
            id: 1,
            nome: 'Rick',
            dataNascimento: '1990-06-01',
            telefone: '123456789',
            cidade: 'São Paulo',
            bairro: 'Centro',
            dataPagamento: '2023-06-03',
            adimplente: true,
            nomeContato1: 'Maria',
            numeroContato1: '987654321',
            grauContato1: 'Mãe',
            nomeContato2: 'José',
            numeroContato2: '654321987',
            grauContato2: 'Pai',
        }
    ];
    await Aluno.bulkCreate(alunos);

    await Treino.create({
        nome: 'Treino de perna',
        alunoId: 1,
    });
});

afterEach(() => {
    Aluno.destroy({ where: {} });
});


describe('Testes do endpoint POST /aluno/:id/treino', () => {
    it('deve cadastrar um treino para o aluno existente', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treinoData = {
            nome: 'Treino A',
            exercicios: [
                { nome: 'Agachamento', repeticoes: 10, series: 3 },
                { nome: 'Supino', repeticoes: 8, series: 4 },
            ],
        };

        const response = await request(app)
            .post(`/aluno/${alunoId}/treino`)
            .send(treinoData);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Treino do aluno cadastrado com sucesso');
    });

    it('deve retornar erro 404 para um aluno inexistente', async () => {
        const alunoId = 999;
        const treinoData = {
            nome: 'Treino B',
            exercicios: [
                { nome: 'Corrida', repeticoes: 20, series: 1 },
                { nome: 'Flexões', repeticoes: 12, series: 3 },
            ],
        };

        const response = await request(app)
            .post(`/aluno/${alunoId}/treino`)
            .send(treinoData);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Aluno não encontrado');
    });

    it('deve retornar erro 500 em caso de falha ao cadastrar o treino', async () => {
        const alunoId = 1;
        const treinoData = {
            nome: 'Treino C',
            exercicios: [
                { nome: 'Agachamento', repeticoes: 8, series: 3 },
                { nome: 'Supino', repeticoes: 8, series: 4 },
            ],
        };

        jest.spyOn(Treino, 'create').mockImplementation(() => {
            throw new Error('Erro ao cadastrar treino');
        });

        const response = await request(app)
            .post(`/aluno/${alunoId}/treino`)
            .send(treinoData);

        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Erro ao cadastrar treino');

        Treino.create.mockRestore();
    });
});

describe('GET /aluno/:id/treino/:treinoId', () => {
    it('deve retornar o treino do aluno com os exercícios', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;

        const response = await request(app).get(`/aluno/${alunoId}/treino/${treinoId}`);

        expect(response.status).toBe(200);

        console.log('teste');
        console.log(response.body);

        expect(response.body).toHaveProperty('nome', 'Treino de perna');
        expect(response.body).toHaveProperty('alunoId', alunoId);
    });

    it('deve retornar status 404 se o aluno não for encontrado', async () => {
        const treinoId = 1;
        const response = await request(app).get(`/aluno/999/treino/${treinoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Aluno não encontrado');
    });

    it('deve retornar status 404 se o treino não for encontrado', async () => {
        const alunoId = 1;
        const response = await request(app).get(`/aluno/${alunoId}/treino/999`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Treino não encontrado');
    });

    it('deve retornar status 500 em caso de erro ao obter o treino', async () => {
        const alunoId = 1;

        jest.spyOn(Treino, 'findOne').mockImplementation(() => {
            throw new Error('Erro ao obter treino');
        });

        const response = await request(app).get(`/aluno/${alunoId}/treino/999`);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao obter treino');

        Treino.findOne.mockRestore();
    });

});

describe('GET /aluno/:id/treino/', () => {
    it('deve retornar os treinos do aluno com os exercícios', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;

        const response = await request(app).get(`/aluno/${alunoId}/treino/`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);

        const treino = response.body[0];
        expect(treino).toHaveProperty('id');
        expect(treino).toHaveProperty('nome');
        expect(treino).toHaveProperty('alunoId');
    });

    it('deve retornar status 404 se o aluno não for encontrado', async () => {
        const alunoId = 999;

        const response = await request(app).get(`/aluno/${alunoId}/treino/`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });

    it('deve retornar status 500 em caso de erro ao obter os treinos', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;

        jest.spyOn(Treino, 'findAll').mockImplementation(() => {
            throw new Error('Erro ao obter treinos do aluno');
        });

        const response = await request(app).get(`/aluno/${alunoId}/treino/`);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao obter treinos do aluno');

        Treino.findAll.mockRestore();
    });
});


describe('Testes do endpoint PUT /aluno/:id/treino/:treinoId', () => {
    it('Deve atualizar o treino do aluno corretamente', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;

        const novoNome = 'Treino de Peito e Costas';
        const novosExercicios = [
            { nome: 'Supino Reto', repeticoes: 10, series: 3 },
            { nome: 'Remada Curvada', repeticoes: 12, series: 4 },
        ];

        const response = await request(app)
            .put(`/aluno/${alunoId}/treino/${treinoId}`)
            .send({ nome: novoNome, exercicios: novosExercicios });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Treino atualizado com sucesso');
    });

    it('Deve retornar erro quando o aluno não é encontrado', async () => {
        const alunoId = 9999;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;

        const response = await request(app)
            .put(`/aluno/${alunoId}/treino/${treinoId}`)
            .send({ nome: 'Novo Treino', exercicios: [] });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Aluno não encontrado');
    });

    it('Deve retornar erro quando o treino não é encontrado', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treinoId = 999;

        const response = await request(app)
            .put(`/aluno/${alunoId}/treino/${treinoId}`)
            .send({ nome: 'Novo Treino', exercicios: [] });

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Treino não encontrado');
    });

    it('Deve retornar erro quando ocorre um erro ao atualizar o treino', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;;

        jest.spyOn(Treino.prototype, 'update').mockRejectedValueOnce(new Error('Erro ao atualizar treino'));

        const response = await request(app)
            .put(`/aluno/${alunoId}/treino/${treinoId}`)
            .send({ nome: 'Novo Treino', exercicios: [] });

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao atualizar treino');
    });
});



describe('Testes do endpoint DELETE /aluno/:id/treino/:idTreino', () => {
    it('Deve excluir o treino do aluno corretamente', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;

        const response = await request(app).delete(`/aluno/${alunoId}/treino/${treinoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Treino excluído com sucesso');
    });

    it('Deve retornar erro quando o aluno não é encontrado', async () => {
        const alunoId = 999;
        const treinoId = 1;

        const response = await request(app).delete(`/aluno/${alunoId}/treino/${treinoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Aluno não encontrado');
    });

    it('Deve retornar erro quando o treino não é encontrado', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treinoId = 999;

        const response = await request(app).delete(`/aluno/${alunoId}/treino/${treinoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Treino não encontrado');
    });

    it('Deve retornar erro quando ocorre um erro ao excluir o treino', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const treino = await Treino.findOne({ where: { nome: 'Treino de perna' } });
        const treinoId = treino.id;

        jest.spyOn(Treino, 'destroy').mockRejectedValueOnce(new Error('Erro ao excluir treino'));

        const response = await request(app).delete(`/aluno/${alunoId}/treino/${treinoId}`);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao excluir treino');
    });
});






closeServer();