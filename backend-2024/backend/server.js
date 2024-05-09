// server.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;

// Conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'your_database_user',
  password: process.env.DB_PASSWORD || 'your_database_password',
  database: process.env.DB_NAME || 'your_database_name'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas de ejemplo
app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table', (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:8080`);
});
