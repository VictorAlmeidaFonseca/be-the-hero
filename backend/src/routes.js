const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentesController = require('./controllers/incidentesController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.get('/profiles', ProfileController.index);


routes.get('/incidents', IncidentesController.index);
routes.post('/incidents', IncidentesController.create);
routes.delete('/incidents/:id', IncidentesController.delete);

module.exports = routes;
