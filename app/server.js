// Import delle dipendenze
const express = require('express');
const cors = require('cors');
const path = require("path")
require('dotenv').config();

// Inizializzazione app
const app = express();
const PORT = process.env.SERVER_PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// === ROTTE ===

// Rotta di test - Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});


app.listen(PORT, () => {
  console.log(`
  🚀 Server Express started with success!
  📡 Listening on: http://localhost:${PORT}
  `);
});