const express = require('express');
const models = require('../models');


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
                nome, alunoId: aluno.id
            });

            await criarExercicios(exercicios, treino.id);

            res.json({ message: 'Treino do aluno cadastrado com sucesso' });
        } else {
            res.json({ message: 'Aluno não encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar treino' });
    }
});


async function criarExercicios(exercicios, idTreino) {
    for (const exercicio of exercicios) {
        const { nome, repeticoes, series, conjugado } = exercicio;

        const exercicioPrincipal = await Exercicio.create({
            nome,
            repeticoes,
            series,
            treinoId: idTreino
        });
        if (conjugado) {
            for (const subExercicio of conjugado) {
                await Exercicio.create({
                    nome: subExercicio.nome,
                    repeticoes: subExercicio.repeticoes,
                    series: subExercicio.series,
                    conjugadoId: exercicioPrincipal.id,
                    treinoId: idTreino
                });
            }
        }
    }
}


module.exports = app;