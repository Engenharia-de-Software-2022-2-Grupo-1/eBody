const express = require('express');
const models = require('../models');
const sequelize = require('sequelize');


const app = express.Router();
let Aluno = models.Aluno;
let Treino = models.Treino;
let Exercicio = models.Exercicio;


app.post('/aluno/:id/treino', async (req, res) => {
    const { id } = req.params;
    const { nome, exercicios } = req.body;

    try {
        const aluno = await Aluno.findByPk(id);

        if (aluno) {
            const treino = await Treino.create({
                nome,
                alunoId: aluno.id
            });

            const exerciciosData = exercicios.map(exercicio => ({
                nome: exercicio.nome,
                repeticoes: exercicio.repeticoes,
                series: exercicio.series,
                treinoId: treino.id
            }));

            await Exercicio.bulkCreate(exerciciosData);

            res.status(201).json({ message: 'Treino do aluno cadastrado com sucesso' });
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar treino' });
    }
});


app.get('/aluno/:id/treino/:treinoId', async (req, res) => {
    const { id, treinoId } = req.params;

    try {
        const aluno = await Aluno.findByPk(id);

        if (aluno) {
            const treino = await Treino.findOne({
                where: { id: treinoId },
                include: Exercicio
            });

            if (treino) {
                res.status(200).json(treino);
            } else {
                res.status(404).json({ error: 'Treino não encontrado' });
            }

        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter treino' });
    }
});


app.put('/aluno/:id/treino/:treinoId', async (req, res) => {
    const { id, treinoId } = req.params;
    const { nome, exercicios } = req.body;

    try {
        const aluno = Aluno.findByPk(id);

        if (aluno) {
            const treino = await Treino.findOne({
                where: { id: treinoId }
            });
            if (treino) {

                await treino.update({
                    nome
                });

                await Exercicio.destroy({
                    where: { treinoId: treino.id }
                });

                const exerciciosData = exercicios.map(exercicio => ({
                    nome: exercicio.nome,
                    repeticoes: exercicio.repeticoes,
                    series: exercicio.series,
                    treinoId: treino.id
                }));

                await Exercicio.bulkCreate(exerciciosData);

                res.status(200).json({ message: 'Treino atualizado com sucesso' });
            } else {
                res.status(404).json({ error: 'Treino não encontrado' });
            }
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar treino' });
    }
});

app.delete('/aluno/:id/treino/:idTreino', async (req, res) => {
    const { id, idTreino } = req.params;

    try {
        const aluno = await Aluno.findByPk(id);

        if (aluno) {
            const treino = await Treino.findOne({
                where: { id: idTreino }
            });

            if (treino) {
                await Exercicio.destroy({
                    where: { treinoId: idTreino }
                });

                await Treino.destroy({
                    where: { id: idTreino }
                });

                res.status(200).json({ message: 'Treino excluído com sucesso' });
            } else {
                res.status(404).json({ error: 'Treino não encontrado' });
            }
        } else {
            res.status(404).json({ message: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir treino' });
    }
});

module.exports = app;