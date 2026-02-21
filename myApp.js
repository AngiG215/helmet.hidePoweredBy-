const express = require('express');
const app = express();
const helmet = require('helmet');





app.use(helmet.hidePoweredBy());








































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