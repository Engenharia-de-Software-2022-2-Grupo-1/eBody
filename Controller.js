const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
let aluno=models.Aluno;
let mediddas=models.Medidas;


app.post('/aluno',async (req,res)=>{
    const { nome, dataNascimento, telefone, cidade, bairro, rua, adimplente } = req.body;
    try {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao criar aluno'});
    }
});


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
})