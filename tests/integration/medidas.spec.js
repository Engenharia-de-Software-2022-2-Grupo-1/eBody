/* eslint-disable */
const request = require('supertest');
const { app, closeServer } = require('../../server');
const { Aluno, Medidas } = require('../../models');

const { limparBaseDeDados } = require('../cleanUp');

beforeAll(async() => {
    await limparBaseDeDados();
});

beforeEach(async () => {
    const alunos = [
        {
          id: 1,
          nome: 'Mario',
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
        },
        {
          id: 2,
          nome: 'Gustavo',
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

      const medidas = [
        {
          data: '2023-06-03',
          peso: 70,
          peito: 90,
          ombro: 45,
          cintura: 75,
          quadril: 95,
          bracoDireito: 30,
          bracoEsquerdo: 30,
          coxaDireita: 50,
          coxaEsquerda: 50,
          panturrilhaDireita: 35,
          panturrilhaEsquerda: 35,
          alunoId: 1,
        },
      ];
      
      await Medidas.bulkCreate(medidas);
});

afterEach(() => {
    Medidas.destroy({ where: {} });
    Aluno.destroy({ where: {} });
});



describe('Testes do endpoint POST /aluno/:id/medidas', () => {
    it('Deve cadastrar as medidas do aluno com sucesso', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Mario' } });
        const alunoId = aluno.id;
        const medidas = {
            data: '2023-06-03',
            peso: 70,
            peito: 90,
            ombro: 45,
            cintura: 75,
            quadril: 95,
            bracoDireito: 30,
            bracoEsquerdo: 30,
            coxaDireita: 50,
            coxaEsquerda: 50,
            panturrilhaDireita: 35,
            panturrilhaEsquerda: 35,
        };

        const response = await request(app).post(`/aluno/${alunoId}/medidas`).send(medidas);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Medidas do aluno cadastradas com sucesso');
    });

    it('Deve retornar erro quando o aluno não for encontrado', async () => {
        const alunoId = 999;
        const medidas = {
            data: '2023-06-03',
            peso: 70,
            peito: 90,
            ombro: 45,
            cintura: 75,
            quadril: 95,
            bracoDireito: 30,
            bracoEsquerdo: 30,
            coxaDireita: 50,
            coxaEsquerda: 50,
            panturrilhaDireita: 35,
            panturrilhaEsquerda: 35,
        };

        const response = await request(app).post(`/aluno/${alunoId}/medidas`).send(medidas);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });

    it('Medidas faltando deve retornar erro interno do servidor ao cadastrar medidas', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Mario' } });
        const alunoId = aluno.id;
        const medidas = {
            data: '2023-06-03',
            ombro: 45,
            cintura: 75,
            quadril: 95,
            bracoDireito: 30,
        };

        const response = await request(app).post(`/aluno/${alunoId}/medidas`).send(medidas);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao cadastrar medidas');
    });
});

describe('Testes do endpoint GET /aluno/:id/medidas', () => {
    it('Deve retornar as medidas do aluno com sucesso', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Mario' } });
        const alunoId = aluno.id;
        console.log(alunoId);
        const medidasMock = [
            { id: 1, alunoId: 1, data: '2023-06-01', peso: 70 },
            { id: 2, alunoId: 1, data: '2023-06-02', peso: 71 },
        ];

        jest.spyOn(Medidas, 'findAll').mockResolvedValueOnce(medidasMock);

        const response = await request(app).get(`/aluno/${alunoId}/medidas`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(medidasMock);
    });

    it('Deve retornar erro quando as medidas do aluno não forem encontradas', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Gustavo' } });
        const alunoId = aluno.id;
        const response = await request(app).get(`/aluno/${alunoId}/medidas`);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: 'Medidas do aluno não encontradas' });
    });

    it('Deve retornar erro interno do servidor ao obter medidas do aluno', async () => {
        const alunoId = 3;

        jest.spyOn(Medidas, 'findAll').mockRejectedValueOnce(new Error('Erro ao obter medidas'));

        const response = await request(app).get(`/aluno/${alunoId}/medidas`);

        expect(response.status).toBe(500);
        expect(response.body).toEqual({ error: 'Erro ao obter medidas do aluno' });
    });
});



describe('Testes do endpoint GET /aluno/:id/medidas/:medida', () => {
    it('Deve retornar as medidas do aluno com o atributo correto', async () => {
        const aluno = await Aluno.findOne({ where: { nome: 'Mario' } });
        const alunoId = aluno.id;
        const medida = 'peso';

        const response = await request(app).get(`/aluno/${alunoId}/medidas/${medida}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('alunoId');
        expect(response.body[0]).toHaveProperty('data');
        expect(response.body[0]).toHaveProperty(medida);
    });

    it('Deve retornar erro quando o aluno não for encontrado', async () => {
        const alunoId = 999;
        const medida = 'peso';

        const response = await request(app).get(`/aluno/${alunoId}/medidas/${medida}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Aluno não encontrado');
    });

    it('Deve retornar erro quando nenhuma medida estiver cadastrada', async () => {
        const alunoId = 2;
        const medida = 'peso';

        const response = await request(app).get(`/aluno/${alunoId}/medidas/${medida}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Nenhuma medida cadastrada');
    });
});


closeServer();