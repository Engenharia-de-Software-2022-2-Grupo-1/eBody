const express = require('express');
const models = require('../models');

const app = express.Router();
const Aluno = models.Aluno;
const Medidas = models.Medidas;

app.post('/aluno/:id/medidas', async (req, res) => {
	const { id } = req.params;
	const { data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
		coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda } = req.body;

	try {
		const aluno = await Aluno.findByPk(id);
		if (aluno) {
			await Medidas.create({
				data, peso, peito, ombro, cintura, quadril, bracoDireito, bracoEsquerdo,
				coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda, alunoId: aluno.id,
			});
			res.status(201).json({ message: 'Medidas do aluno cadastradas com sucesso' });
		} else {
			res.status(404).json({ error: 'Aluno não encontrado' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Erro ao cadastrar medidas' });
	}
});

app.get('/aluno/:id/medidas', async (req, res) => {
	const { id } = req.params;
	try {
		const medidasDoAluno = await Medidas.findAll({
			where: { alunoId: id },
			order: [ [ 'data', 'DESC' ] ],
		});
		if (medidasDoAluno.length > 0) {
			res.status(200).json(medidasDoAluno);
		} else {
			res.status(404).json({ error: 'Medidas do aluno não encontradas' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Erro ao obter medidas do aluno' });
	}
});

app.get('/aluno/:id/medidas/:medida', async (req, res) => {
	const { id, medida } = req.params;

	try {
		const aluno = await Aluno.findByPk(id);

		if (aluno) {
			const medidas = await Medidas.findAll({
				where: { alunoId: id },
				order: [ [ 'createdAt', 'DESC' ] ],
				attributes: [ 'id', 'alunoId', 'data', medida ],
			});

			if (medidas.length > 0) {
				res.status(200).json(medidas);
			} else {
				res.status(404).json({ message: 'Nenhuma medida cadastrada' });
			}
		} else {
			res.status(404).json({ message: 'Aluno não encontrado' });
		}

	} catch (error) {
		res.status(500).json({ error: 'Erro ao obter Medida' });
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
				coxaDireita, coxaEsquerda, panturrilhaDireita, panturrilhaEsquerda,
			});
			res.status(200).json({ message: 'Medida atualizada com sucesso' });
		} else {
			res.status(404).json({ error: 'Medida não encontrada' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Erro ao atualizar medida' });
	}
});

module.exports = app;