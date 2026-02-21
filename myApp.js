const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. Configuraciones de Seguridad
app.use(helmet.hidePoweredBy());

// 2. Archivos estáticos
app.use(express.static('public'));

// 3. Ruta principal
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 4. Exportar la app (IMPORTANTE: Esto es lo que server.js usará)
module.exports = app;
