// o express vai nos ajudar principalmente na criacao das rotas da aplicacao, na criacao do servidor

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();

// servidor http fora do expresss
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://root:root123@cluster0-flybi.mongodb.net/app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
//express n entende Json logo, temos q indicar q iremos usa-lo, o USE serve para todas as rotas, seja get, post...
app.use(express.json());
app.use(routes);

server.listen(3333);