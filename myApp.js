const express = require('express');
const helmet = require('helmet');
const app = express();

// Desafío 1: Ocultar que usamos Express
app.use(helmet.hidePoweredBy());

// Servir archivos estáticos y la vista principal
app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// IMPORTANTE: Solo exportamos app. 
// No importamos server.js ni usamos app.listen aquí.
module.exports = app;
