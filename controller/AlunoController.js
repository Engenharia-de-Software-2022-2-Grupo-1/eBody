const express = require('express');
const models = require('../models');

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


app.get('/aluno', async (req, res) => {
    try {
        const alunos = await aluno.findAll();
        res.json(alunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar alunos' });
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


module.exports = app;