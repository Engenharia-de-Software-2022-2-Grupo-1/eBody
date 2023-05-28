const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('../models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
let aluno=models.Aluno;
let contato=models.Contato;
let index=models.index;


app.post('/aluno', async (req,res)=>{
    const { nome, dataNascimento, telefone, cidade, bairro, rua, adimplente } = req.body;
    try {
        const existeAluno = await aluno.findOne({ where : { nome, dataNascimento  } });
        if (existeAluno) {
            res.status(200).json({message: 'Esse aluno já está cadastrado!'});
        } else {
            const novoAluno=await aluno.create({
                nome,
                dataNascimento,
                telefone,
                cidade,
                bairro,
                rua,
                adimplente
            });
            res.json(novoAluno);
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
        alunoAtualizado.nome = nome;
        alunoAtualizado.dataNascimento = dataNascimento;
        alunoAtualizado.telefone = telefone;
        alunoAtualizado.cidade = cidade;
        alunoAtualizado.bairro = bairro;
        alunoAtualizado.rua = rua;
        alunoAtualizado.adimplente = adimplente;
  
        await alunoAtualizado.save();
  
        res.json({ message: 'Aluno atualizado com sucesso' });
      } else {
        res.status(404).json({ error: 'Aluno não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar aluno' });
    }
  });


app.get('/aluno', async (req,res)=> {
    try {
        const alunos = await aluno.findAll();
        res.json(alunos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar alunos' });
    }
});

app.get('/aluno/:id', async (req,res)=> {
    const { id } = req.params;

    try {
        const existeAluno = await aluno.findByPk(id);
        if (existeAluno) {
            alunoEncontrado = await aluno.findOne({ where: { id } });
            res.json(alunoEncontrado);
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao tentar encontrar aluno' });
    }
});


app.delete('/aluno/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const existeAluno = await aluno.findByPk(id);
        if (existeAluno) {
            await aluno.destroy({ where: { id }});
            res.json({ message: 'Aluno excluido com sucesso' });
        } else {
            res.status(404).json({ error: 'Aluno não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir aluno' });
    }
});


app.get('/aluno/:idAluno/contato', async (req, res)=> {
    try {
        const alunoId = parseInt(req.params.idAluno);
        const contatos = await contato.findAll({ where: { alunoId }});
        res.json(contatos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar contatos' });
    }

});


app.post('/aluno/:idAluno/contato/:id', async (req, res)=>{
    const { id, nome, numero, grauProximidade } = req.body;
    const alunoId = parseInt(req.params.idAluno);
    try {
        const existeContato = await contato.findOne({ where : { numero, alunoId } });
        const contatos = await contato.findAll( { where: {alunoId} } );
        if (existeContato) {
            res.status(200).json({message: 'Esse contato já está cadastrado!'});
        }else if (contatos.length == 2) {
            res.status(200).json({message: 'Esse Aluno já possui 2 contatos cadastrados!'});
        }else {
            const novoContato=await contato.create({
                id,
                nome,
                numero,
                grauProximidade,
                alunoId
            });
            res.json(novoContato);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar contato' });
    }
});


app.put('/aluno/:idAluno/contato/:id', async (req, res)=> {
    const { id } = req.params;
    const { nome, numero, grauProximidade } = req.body;

    try {
        const contatoAtualizado = await contato.findByPk(id);

        if (contatoAtualizado) {
            contatoAtualizado.nome = nome;
            contatoAtualizado.numero = numero;
            contatoAtualizado.grauProximidade = grauProximidade;

            await contatoAtualizado.save();

            res.json({ message: 'Contato atualizado com sucesso!' });
        }else {
            res.status(400).json({ error: 'Contato não esta cadastrado!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar contato' });
    }

});


app.delete('/aluno/:idAluno/contato/:id', async (req,res)=> {
    const { id } = req.params;
    const alunoId = parseInt(req.params.idAluno);
    try {
        const existeContato = await contato.findOne({ where : { id, alunoId } });
        if (existeContato) {
            await contato.destroy({ where: {id}});
            await models.sequelize.query('UPDATE Contatos AS Contato SET "id" = "id" - 1 WHERE "id" > :id',{replacements: { id }});
            res.json({ message: 'Contato excluido com sucesso!'});
        }else {
            res.status(404).json({ error: 'Contato não encontrado!' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao exluir contato!' });
    }

});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
})