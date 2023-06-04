const { Aluno, Medidas, Treino, Exercicio } = require('../models');

async function limparBaseDeDados() {
	try {
		await Medidas.destroy({ where: {} });
		await Treino.destroy({ where: {} });
		await Exercicio.destroy({ where: {} });
		await Aluno.destroy({ where: {} });

	// eslint-disable-next-line no-empty
	} catch (error) {
		//
	}
}

module.exports = { limparBaseDeDados };
