const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const grupos = require('./routes/grupos');
const hospitais = require('./routes/hospitais')
const PORT = 3000

app.use(cors());
app.use(bodyParser.json());
app.use('/grupos', grupos);
app.use('/hospitais', hospitais);


app.get('/', (request, response) => {
    response.send('Está procurando ajuda? Liste aqui alguns hospitais ou grupos disponiveis')
  })
  
  app.listen(PORT)
console.info(`Está rodando na porta ${PORT}`)




