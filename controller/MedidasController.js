const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');

const app = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let aluno = models.Aluno;
let medidas = models.Medidas;


app.post('/aluno/:id/medidas', async (req, res) => {
    const { id } = req.params;
    const { data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
        coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda } = req.body;

    try {
        const existeAluno = await aluno.findByPk(id);
        if (existeAluno) {
            const novaMedida = await medidas.create({
                data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
                coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda, alunoId: existeAluno.id
            });
            res.json({message: 'Medidas do aluno cadastradas com sucesso'});
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao cadastrar medidas'});
    }
});

app.get('/aluno/:id/medidas', async (req, res) => {
    const { id } = req.params;
  
    try {
      const medidasDoAluno = await medidas.findOne({
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


  module.exports = app;