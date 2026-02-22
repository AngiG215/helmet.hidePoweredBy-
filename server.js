const myApp = require('./myApp'); // Importamos tu app con Helmet
const express = require('express');
const path = require('path');

// Usamos la app que viene de myApp.js
const app = myApp; 

// 1. CORS para que FCC pueda entrar
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, content-type, Accept'
  });
  next();
});

// 2. Ruta para que el test de FCC vea los headers
app.get("/_api/app-info", (req, res) => {
  res.json({
    headers: res.getHeaders(),
    appStack: app._router.stack.map(layer => layer.name)
  });
});

// 3. Página principal
app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 4. Puerto para Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor activo y protegido');
});
