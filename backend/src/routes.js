const express = require('express');
const ongControllers = require('./controllers/OngControllers')
const incidentsControllers = require('./controllers/IncidentsControllers')
const porfileControllers = require('./controllers/ProfileControllers')
const sessionControllers = require('./controllers/SessionControllers')
const loginControllers = require('./controllers/LoginControllers')

const routes = express.Router();

routes.get('/ongs', ongControllers.index);
routes.post('/ongs', ongControllers.create);

routes.get('/profile', porfileControllers.index);

routes.post('/login', loginControllers.create);

routes.post('/session', sessionControllers.create);

routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete);

module.exports = routes
    