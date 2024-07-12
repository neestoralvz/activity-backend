const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear el body
app.use(express.json());

// Rutas
app.use('/api/activities', require('./routes/activityRoutes'));

// Servir archivos estáticos
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../activity-tracker/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../activity-tracker', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
