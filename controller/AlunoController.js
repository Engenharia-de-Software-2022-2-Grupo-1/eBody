const express = require('express');
const models = require('../models');
const { Op } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');


const app = express.Router();
let Aluno = models.Aluno;

app.post('/aluno', async (req, res) => {
    const { nome, dataNascimento, telefone, cidade, bairro, adimplente,
        nomeContato1, numeroContato1, grauContato1, nomeContato2, numeroContato2, grauContato2 } = req.body;
    
    const dataPagamento = new Date();
    try {
        const aluno = await Aluno.findOne({ where: { nome, dataNascimento } });
        if (aluno) {
            res.status(409).json({ message: 'Esse aluno já está cadastrado!' });
        } else {
            await Aluno.create({
                nome,
                dataNascimento,
                telefone,
                cidade,
                bairro,
                dataPagamento,
                adimplente,
                nomeContato1,
                numeroContato1,
                grauContato1,
                nomeContato2,
                numeroContato2,
                grauContato2
            });
            res.status(201).json({ message: 'Aluno cadastrado com sucesso' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar aluno' });
    }
});

app.get('/aluno', async (req, res) => {
    try {
        const alunos = await Aluno.findAll();
        res.status(200).json(alunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar alunos' });
    }
});

app.get('/aluno/nome/:nome', async (req, res) => {
    const { nome } = req.params;
    try {
        const alunos = await Aluno.findAll({
            where: {
                nome: {
                    [Op.like]: `%${nome}%`,
                },
            },
        });
        if (alunos.length > 0) {
            res.status(200).json(alunos);
        } else {
            res.status(200).json({ message: 'Nenhum aluno encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os alunos pelo nome.' });
    }
});

app.get('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const aluno = await Aluno.findByPk(id);

        if (aluno) {
            res.status(200).json(aluno);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o aluno pelo ID.' });
    }
});

app.get('/aniversariante/', async (req, res) => {
    try {
        const mesAtual = new Date().getMonth() + 1;
        const aniversariantes = await Aluno.findAll({
            attributes: ['nome', 'dataNascimento'],
            where: sequelize.where(
                sequelize.fn('strftime', '%m', sequelize.col('dataNascimento')),
                mesAtual.toString().padStart(2, '0')
            )
        });
        res.status(200).json(aniversariantes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os aniversariantes do mês atual.' });
    }
});

app.get('/inadimplente/', async (req, res) => {
    try {

        await verificarInadimplencia();

        const inadimplentes = await Aluno.findAll({
            attributes: ['nome', 'adimplente'],
            where: {
                adimplente: false
            }
        });
        res.status(200).json(inadimplentes);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os inadimplente do mês atual.' });
    }
});

app.put('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, dataNascimento, telefone, cidade, bairro, adimplente,
        nomeContato1, numeroContato1, grauContato1, nomeContato2, numeroContato2, grauContato2 } = req.body;

    try {
        const alunoAtualizado = await Aluno.findByPk(id);

        if (alunoAtualizado) {
            await alunoAtualizado.update({
                nome,
                dataNascimento,
                telefone,
                cidade,
                bairro,
                adimplente,
                nomeContato1,
                numeroContato1,
                grauContato1,
                nomeContato2,
                numeroContato2,
                grauContato2
            });
            res.status(200).json({ message: 'Aluno atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

app.put('/inadimplente/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const aluno = await Aluno.findByPk(id);
        if (aluno) {
            aluno.adimplente = true;

            const novaDataPagamento = moment(aluno.dataPagamento).add(1, 'months').toDate();
            aluno.dataPagamento = novaDataPagamento;

            await aluno.save();
            res.status(200).json({ message: 'Aluno atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

app.delete('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const aluno = await Aluno.findByPk(id);
        if (aluno) {
            await Aluno.destroy({ where: { id } });
            res.status(200).json({ message: 'Aluno excluido com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir aluno' });
    }
});


async function verificarInadimplencia() {
    try {
        const alunos = await Aluno.findAll();

        for (const aluno of alunos) {
            const dataPagamento = moment(aluno.dataPagamento);
            const dataAtual = moment();
            const diffDias = dataAtual.diff(dataPagamento, 'days');


            if (diffDias >= 30) {
                aluno.adimplente = false;
                await aluno.save();
            }
        }
        console.log('Verificação de inadimplência concluída.');
    } catch (error) {
        console.error('Erro ao verificar inadimplência:', error);
    }
}

function verificarNumeroCelular(numero) {
    // Expressão regular para validar o número de celular
    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;

    return regex.test(numero);
}


module.exports = app;