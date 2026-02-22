const express = require('express');
const app = express();
const path = require('path');
const myApp = require('./myApp'); // Tu archivo de lógica

// 1. Esto permite que FreeCodeCamp lea tu sitio desde su web
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, content-type, Accept'
  });
  next();
});

// 2. Conectamos con tus desafíos de seguridad
app.use('/', myApp);

// 3. RUTA CRÍTICA: Sin esto FCC NO te aprobará
app.get("/_api/app-info", (req, res) => {
  const hs = res.getHeaders();
  res.json({
    headers: hs,
    appStack: app._router.stack.map(layer => layer.name)
  });
});

// 4. Servir el HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Ready on port ${port}`);
});
