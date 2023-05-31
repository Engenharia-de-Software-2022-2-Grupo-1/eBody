const express = require('express');
const models = require('../models');

const app = express.Router();
let Aluno = models.Aluno;
let Medidas = models.Medidas;


app.post('/aluno/:id/medidas', async (req, res) => {
    const { id } = req.params;
    const { data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
        coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda } = req.body;

    try {
        const aluno = await Aluno.findByPk(id);
        if (aluno) {
            await Medidas.create({
                data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
                coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda, alunoId: aluno.id
            });
            res.json({ message: 'Medidas do aluno cadastradas com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar medidas' });
    }
});

app.get('/aluno/:id/Medidas', async (req, res) => {
    const { id } = req.params;
    try {
        const medidasDoAluno = await Medidas.findOne({
            where: { alunoId: id },
            order: [['data', 'DESC']]
        });
        if (medidasDoAluno) {
            res.json(medidasDoAluno);
        } else {
            res.status(404).json({ error: 'Medidas do aluno não encontradas' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter medidas do aluno' });
    }
});

app.put('/medidas/:id', async (req, res) => {
    const { id } = req.params;
    const { data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
      coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda } = req.body;
  
    try {
      const medidaExistente = await Medidas.findByPk(id);
      if (medidaExistente) {
        await medidaExistente.update({
          data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
          coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda
        });
        res.json({ message: 'Medida atualizada com sucesso' });
      } else {
        res.status(404).json({ error: 'Medida não encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar medida' });
    }
  });
  

module.exports = app;