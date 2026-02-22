const express = require('express');
const helmet = require('helmet');
const app = express();

// 10. EL TODO-EN-UNO: Activa 11 middlewares de seguridad a la vez
app.use(helmet({
  // Mantenemos las configuraciones que el test exige:
  frameguard: {         // Configura Clickjacking
    action: 'deny'
  },
  contentSecurityPolicy: {    // Configura CSP
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com'],
    }
  },
  dnsPrefetchControl: false   // Ejemplo de cómo desactivar algo si quisieras
}));

// Nota: El test a veces pide mantener las líneas individuales 
// si este "todo en uno" no te lo reconoce. 
// ¡Pero esta es la forma profesional de hacerlo!

module.exports = app;;
