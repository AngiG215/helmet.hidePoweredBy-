const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());



// app.use(helmet.hidePoweredBy());






































app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'PHP 7.4.3'); // Un pequeño "engaño"
  next();
});

app.get("/", function (request, response) {
  response.send("Hello World - Helmet Activo");
});

// Ruta que FCC usa para auditar tu código
app.get("/_api/app-info", function(req, res) {
  res.json({
    headers: res.getHeaders(),
    appStack: app._router.stack.map(layer => layer.name)
  });
});

module.exports = app;
