const express = require('express');
const helmet = require('helmet');
const app = express();

// ESTA ES LA ÚNICA LÍNEA QUE REALMENTE IMPORTA PARA EL RETO
app.use(helmet.hidePoweredBy()); 

app.use(helmet.frameguard({ action: 'deny' }));

app.use(helmet.xssFilter());

module.exports = app;
