const express = require('express');
const models = require('../models');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const app = express.Router();
let aluno = models.Aluno;

app.post('/aluno', async (req, res) => {
    const { nome, dataNascimento, telefone, cidade, bairro, rua, adimplente } = req.body;
    try {
        const existeAluno = await aluno.findOne({ where: { nome, dataNascimento } });
        if (existeAluno) {
            res.status(200).json({ message: 'Esse aluno já está cadastrado!' });
        } else {
            const novoAluno = await aluno.create({
                nome,
                dataNascimento,
                telefone,
                cidade,
                bairro,
                rua,
                adimplente
            });
            res.json({ message: 'Aluno cadastrado com sucesso' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar aluno' });
    }
});

app.get('/aluno', async (req, res) => {
    try {
        const alunos = await aluno.findAll();
        res.json(alunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar alunos' });
    }
});

app.put('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, dataNascimento, telefone, cidade, bairro, rua, adimplente } = req.body;

    try {
        const alunoAtualizado = await aluno.findByPk(id);

        if (alunoAtualizado) {
            await alunoAtualizado.update({
                nome,
                dataNascimento,
                telefone,
                cidade,
                bairro,
                rua,
                adimplente
            });
            res.json({ message: 'Aluno atualizado com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
});

app.delete('/aluno/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const existeAluno = await aluno.findByPk(id);
        if (existeAluno) {
            await aluno.destroy({ where: { id } });
            res.json({ message: 'Aluno excluido com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir aluno' });
    }
});

app.get('/aluno/nome/:nome', async(req, res) => {
    const { nome } = req.params;
    try {
        const alunos = await aluno.findAll({
            where: {
                nome: {
                    [Op.like]: `%${nome}%`,
                },  
            },
        });
        if (alunos.length > 0) {
            res.json(alunos);
        } else {
            res.json({ message: 'Nenhum aluno encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar os alunos pelo nome.' });
    }
});

app.get('/aluno/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const existeAluno = await aluno.findByPk(id);
        
        if (existeAluno) {
            res.json(existeAluno);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o aluno pelo ID.' });
    }
});


app.get('/aniversariantes/', async(req, res) => {
    try {        
        const mesAtual = new Date().getMonth() + 1;
        const aniversariantes = await aluno.findAll({
            attributes: ['nome', 'dataNascimento'],
            where: sequelize.where(
              sequelize.fn('strftime', '%m', sequelize.col('dataNascimento')),
              mesAtual.toString().padStart(2, '0')
            )
          });
        res.json(aniversariantes);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Erro ao obter os aniversariantes do mês atual.' });
    }
});


module.exports = app;