const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. Desafío de Seguridad: Ocultar que usamos Express
app.use(helmet.hidePoweredBy());

// 2. Configuración básica de rutas y archivos estáticos
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 3. Exportar la aplicación para que server.js la use
module.exports = app;
