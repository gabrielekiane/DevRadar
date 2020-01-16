// o express vai nos ajudar principalmente na criacao das rotas da aplicacao, na criacao do servidor

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
//express n entende Json logo, temos q indicar q iremos usa-lo, o USE serve para todas as rotas, seja get, post...
app.use(express.json());
app.use(routes);

app.listen(3333);