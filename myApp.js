const express = require('express');
const helmet = require('helmet');
const app = express();

// 1. Usa helmet para ocultar X-Powered-By
app.use(helmet.hidePoweredBy());

// 2. Configura los archivos estáticos y la ruta de inicio
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// 3. EXPORTAR APP - Esto es lo único que debe ir al final
module.exports = app;
