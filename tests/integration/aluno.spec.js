/* eslint-disable */
const request = require('supertest');
const { app, closeServer } = require('../../server');
const { Aluno } = require('../../models');
const moment = require('moment');

const { limparBaseDeDados } = require('../cleanUp');

beforeAll(async() => {
    await limparBaseDeDados();
});

describe('Testes do endpoint POST /aluno', () => {
    it('Deve cadastrar um novo aluno com sucesso', async () => {
        const novoAluno = {
            nome: 'João',
            dataNascimento: '1990-03-01',
            telefone: '123456789',
            cidade: 'São Paulo',
            bairro: 'Centro',
            adimplente: true,
            nomeContato1: 'Maria',
            numeroContato1: '987654321',
            grauContato1: 'Mãe',
            nomeContato2: 'José',
            numeroContato2: '654321987',
            grauContato2: 'Pai',
        };

        const response = await request(app).post('/aluno').send(novoAluno);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Aluno cadastrado com sucesso');

        const alunoCadastrado = await Aluno.findOne({ where: { nome: 'João' } });
        expect(alunoCadastrado).toBeTruthy();
        expect(alunoCadastrado.dataValues).toMatchObject(novoAluno);
    });

    it('Deve retornar erro ao cadastrar aluno com dados faltantes', async () => {
        const alunoInvalido = {
            nome: 'João',
            telefone: '123456789',
            cidade: 'São Paulo',
        };

        const response = await request(app).post('/aluno').send(alunoInvalido);

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao criar aluno');
    });

    it('Deve retornar erro ao cadastrar aluno já existente', async () => {
        const aluno = {
            nome: 'Ben',
            dataNascimento: '1990-01-01',
            telefone: '123456789',
            cidade: 'São Paulo',
            bairro: 'Centro',
            adimplente: true,
            nomeContato1: 'Maria',
            numeroContato1: '987654321',
            grauContato1: 'Mãe',
            nomeContato2: 'José',
            numeroContato2: '654321987',
            grauContato2: 'Pai',
        };

        const novoAluno = {
            nome: 'Ben',
            dataNascimento: '1990-01-01',
            telefone: '123456789',
            cidade: 'São Paulo',
            bairro: 'Centro',
            adimplente: true,
            nomeContato1: 'Maria',
            numeroContato1: '987654321',
            grauContato1: 'Mãe',
            nomeContato2: 'José',
            numeroContato2: '654321987',
            grauContato2: 'Pai',
        };

        await request(app).post('/aluno').send(aluno);
        const response = await request(app).post('/aluno').send(novoAluno);

        expect(response.status).toBe(409);
        expect(response.body).toHaveProperty('message', 'Esse aluno já está cadastrado!');
    });


    it('Deve retornar um erro interno do servidor em caso de falha ao cadastrar aluno', async () => {
        const createAlunoMock = jest.spyOn(Aluno, 'create').mockImplementation(() => {
          throw new Error('Erro ao criar aluno');
        });
      
        const novoAluno = {
          nome: 'Rick',
          dataNascimento: '1990-03-01',
          telefone: '123456789',
          cidade: 'São Paulo',
          bairro: 'Centro',
          adimplente: true,
          nomeContato1: 'Maria',
          numeroContato1: '987654321',
          grauContato1: 'Mãe',
          nomeContato2: 'José',
          numeroContato2: '654321987',
          grauContato2: 'Pai',
        };
      
        const response = await request(app).post('/aluno').send(novoAluno);
      
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao criar aluno');
      
        createAlunoMock.mockRestore();
      });
      

});

describe('Testes do endpoint GET /aluno', () => {

    it('Deve listar os alunos com sucesso', async () => {

        const response = await request(app).get('/aluno');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(2);
    });

    it('Deve retornar um erro interno do servidor em caso de falha ao listar alunos', async () => {
        const findAllAlunosMock = jest.spyOn(Aluno, 'findAll').mockImplementation(() => {
          throw new Error('Erro ao listar alunos');
        });
      
        const response = await request(app).get('/aluno');
      
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao listar alunos');
      
        findAllAlunosMock.mockRestore();
      });
});

describe('Testes do endpoint GET /aluno/:nome', () => {
    it('Deve retornar mensagem de nenhum aluno encontrado', async () => {
        const response = await request(app).get('/aluno/nome/Inexistente');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Nenhum aluno encontrado');
    });

    it('Deve retornar o aluno procurado', async () => {
        const response = await request(app).get('/aluno/nome/B');

        expect(response.status).toBe(200);
        expect(response.body[0]).toHaveProperty('nome', 'Ben');
    });

    it('Deve retornar um erro interno do servidor em caso de falha ao buscar aluno por nome', async () => {
        const findOneAlunoMock = jest.spyOn(Aluno, 'findAll').mockImplementation(() => {
          throw new Error('Erro ao buscar os alunos pelo nome.');
        });
      
        const response = await request(app).get('/aluno/nome/Lucas');
      
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('error', 'Erro ao buscar os alunos pelo nome.');
      
        findOneAlunoMock.mockRestore();
      });
});

describe('Testes do endpoint GET /aluno/:id', () => {
    it('Deve retornar o aluno com o ID correto', async () => {
        await Aluno.bulkCreate([
            {
                nome: 'Rick',
                dataNascimento: '1990-01-01',
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
            }]);
        const aluno = await Aluno.findOne({ where: { nome: 'Rick' } });
        const alunoId = aluno.id;
        const response = await request(app).get(`/aluno/${alunoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body.nome).toBe('Rick');
    });

    it('Deve retornar erro quando o aluno não é encontrado', async () => {
        const alunoId = 999;
        const response = await request(app).get(`/aluno/${alunoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });
});


describe('Testes do endpoint GET /aniversariante/', () => {
    it('Deve retornar um array vazio se não houver aniversariantes no mês atual', async () => {
        const response = await request(app).get('/aniversariante/');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(0);
    });


    it('Deve retornar os aniversariantes do mês atual', async () => {
        await Aluno.bulkCreate([
            {
                nome: 'Fernando',
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
            }]);
        const response = await request(app).get('/aniversariante/');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(1);
    });

    it('Deve retornar um erro interno do servidor em caso de falha ao obter os aniversariantes', async () => {
        jest.spyOn(Aluno, 'findAll').mockRejectedValue(new Error('Erro ao obter aniversariantes'));

        const response = await request(app).get('/aniversariante/');

        expect(response.status).toBe(500);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('error', 'Erro ao obter os aniversariantes do mês atual.');

        Aluno.findAll.mockRestore();
    });
});


describe('Testes do endpoint GET /inadimplente/', () => {
    it('Deve retornar um array vazio se não houver alunos inadimplentes', async () => {
        const response = await request(app).get('/inadimplente/');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(0);
    });


    it('Deve retornar os alunos inadimplentes', async () => {
        await Aluno.bulkCreate([
            {
                nome: 'Marcela',
                dataNascimento: '1990-06-01',
                telefone: '123456789',
                cidade: 'São Paulo',
                bairro: 'Centro',
                dataPagamento: '2023-06-03',
                adimplente: false,
                nomeContato1: 'Maria',
                numeroContato1: '987654321',
                grauContato1: 'Mãe',
                nomeContato2: 'José',
                numeroContato2: '654321987',
                grauContato2: 'Pai',
            }]);
       
        const response = await request(app).get('/inadimplente/');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(Array.isArray(response.body)).toBe(true);

        response.body.forEach(aluno => {
            expect(aluno).toHaveProperty('id');
            expect(aluno).toHaveProperty('nome');
            expect(aluno).toHaveProperty('adimplente', false);
        });
    });
});


describe('Testes do endpoint PUT /aluno/:id', () => {
    it('Deve atualizar o aluno corretamente', async () => {
        const alunoId = 3;
        const novoNome = 'Jon Snow';

        const response = await request(app)
            .put(`/aluno/${alunoId}`)
            .send({
                nome: novoNome,
                dataNascimento: '1990-03-01',
                telefone: '123456789',
                cidade: 'São Paulo',
                bairro: 'Centro',
                adimplente: true,
                nomeContato1: 'Maria',
                numeroContato1: '987654321',
                grauContato1: 'Mãe',
                nomeContato2: 'José',
                numeroContato2: '654321987',
                grauContato2: 'Pai',
            });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('message', 'Aluno atualizado com sucesso');

        const alunoAtualizado = await Aluno.findByPk(alunoId);
        expect(alunoAtualizado.nome).toBe(novoNome);
    });

    it('Deve retornar erro 404 se o aluno não for encontrado', async () => {
        const alunoId = 999;

        const response = await request(app)
            .put(`/aluno/${alunoId}`)
            .send({
                nome: 'Shrek',
                dataNascimento: '1990-03-01',
                telefone: '123456789',
                cidade: 'São Paulo',
                bairro: 'Centro',
                adimplente: true,
                nomeContato1: 'Maria',
                numeroContato1: '987654321',
                grauContato1: 'Mãe',
                nomeContato2: 'José',
                numeroContato2: '654321987',
                grauContato2: 'Pai',
            });

        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });
});


describe('Testes do endpoint PUT /inadimplente/:id', () => {
    it('Deve atualizar o aluno para adimplente e ajustar a data de pagamento corretamente', async () => {
        await Aluno.bulkCreate([
            {
                nome: 'Marcela',
                dataNascimento: '1990-06-01',
                telefone: '123456789',
                cidade: 'São Paulo',
                bairro: 'Centro',
                dataPagamento: '2023-06-03',
                adimplente: false,
                nomeContato1: 'Maria',
                numeroContato1: '987654321',
                grauContato1: 'Mãe',
                nomeContato2: 'José',
                numeroContato2: '654321987',
                grauContato2: 'Pai',
            }]);

        
        const aluno = await Aluno.findOne({ where: { nome: 'Marcela' } });
        const alunoId = aluno.id;

        const response = await request(app).put(`/inadimplente/${alunoId}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('message', 'Aluno atualizado com sucesso');

        const alunoAtualizado = await Aluno.findByPk(alunoId);
        expect(alunoAtualizado.adimplente).toBe(true);
        expect(alunoAtualizado.dataPagamento).toEqual(moment(aluno.dataPagamento).add(1, 'months').format('YYYY-MM-DD'));
    });

    it('Deve retornar erro 404 se o aluno não for encontrado', async () => {
        const alunoId = 999;

        const response = await request(app).put(`/inadimplente/${alunoId}`);

        expect(response.status).toBe(404);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });
});

describe('Testes do endpoint DELETE /aluno/:id', () => {
    it('Deve excluir o aluno corretamente', async () => {
      const alunoId = 3;
  
      const response = await request(app).delete(`/aluno/${alunoId}`);
  
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message', 'Aluno excluido com sucesso');
  
      const alunoExcluido = await Aluno.findByPk(alunoId);
      expect(alunoExcluido).toBeNull();
    });
  
    it('Deve retornar erro quando o aluno não é encontrado', async () => {
      const alunoId = 999;
  
      const response = await request(app).delete(`/aluno/${alunoId}`);
  
      expect(response.status).toBe(404);
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('error', 'Aluno não encontrado');
    });
});
  

closeServer();