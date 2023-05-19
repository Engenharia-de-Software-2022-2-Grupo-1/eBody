const express = require('express');
const cors = require('cors');
const alunoController = require('./controller/AlunoController');
const medidasController = require('./controller/MedidasController');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', alunoController);
app.use('/', medidasController);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});