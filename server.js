const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const alunoController = require('./controller/AlunoController');
const medidasController = require('./controller/MedidasController');
const treinoController = require('./controller/TreinoController');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', alunoController);
app.use('/', medidasController);
app.use('/', treinoController);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});