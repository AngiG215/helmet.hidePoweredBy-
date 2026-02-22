const express = require('express');
const path = require('path');
const app = express();
const myApp = require('./myApp'); // Importa tu lógica de Helmet

// 1. Configuración de CORS (Para que FCC pueda leer tu sitio)
app.use(function (req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, content-type, Accept",
  });
  next();
});

// 2. Conexión con tu archivo myApp.js
app.use('/', myApp);

// 3. LA RUTA QUE TE FALTA (/_api)
// Esta es la "ventana" que usa FreeCodeCamp para auditarte
app.get("/_api/app-info", function(req, res) {
  var hs = res.getHeaders();
  res.json({
    headers: hs,
    appStack: app._router.stack.map(layer => layer.name)
  });
});

// 4. Manejo de errores básico
app.use(function(req, res, next){
  res.status(404).type('txt').send('Not Found');
});

// 5. EL PUERTO (Vital para que Render no falle)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor activo en puerto: ' + port);
});
