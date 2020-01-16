const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// metodos http: get, post, put, delete
// tipos de parametros: 
// Query Params: request.query (filtros, ordenacao, paginacao...(+ usado no get))
// Rout Params: request.params (identificar um recurso na alteracao ou remocao (+ usado no put e delete))
// body: request.body (dados para alteracao ou criacao de um registro (post ou put)) - json, por exemplo

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store );

routes.get('/search', SearchController.index);

module.exports = routes;