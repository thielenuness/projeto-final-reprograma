const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const index = require('./routes/index');
const hospitais = require('./routes/hospitais')

app.use(cors());
app.use(bodyParser.json());
app.use('/', index);
app.use('/hospitais', hospitais);

module.exports = app;



