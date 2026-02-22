const express = require('express');
const helmet = require('helmet');
const app = express();

// ESTA ES LA ÚNICA LÍNEA QUE REALMENTE IMPORTA PARA EL RETO
app.use(helmet.hidePoweredBy()); 

app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({ maxAge: 7776000, force: true }));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.noCache());

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-scripts.com'],
  }
}));

module.exports = app;
