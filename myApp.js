const express = require('express');
const helmet = require('helmet');
const app = express();

// ESTA ES LA ÚNICA LÍNEA QUE REALMENTE IMPORTA PARA EL RETO
app.use(helmet.hidePoweredBy()); 

module.exports = app;
